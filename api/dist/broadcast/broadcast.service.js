var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var BroadcastService_1;
import { BadRequestException, Injectable, Logger } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { PLAN_LIMITS } from "../common/plan-limits.js";
import { BotRuntimeService } from "../bots/bot-runtime.service.js";
const MONTHLY_BROADCAST_LIMIT = 4;
let BroadcastService = BroadcastService_1 = class BroadcastService {
    prisma;
    runtime;
    logger = new Logger(BroadcastService_1.name);
    constructor(prisma, runtime) {
        this.prisma = prisma;
        this.runtime = runtime;
    }
    list(businessId) {
        return this.prisma.broadcast.findMany({ where: { businessId }, orderBy: { createdAt: "desc" } });
    }
    async create(businessId, dto) {
        const business = await this.prisma.business.findUniqueOrThrow({ where: { id: businessId } });
        if (!PLAN_LIMITS[business.planTier].broadcastAllowed) {
            throw new BadRequestException("پیام همگانی فقط در پلن‌های کسب‌وکار و حرفه‌ای فعال است");
        }
        const since = new Date();
        since.setDate(since.getDate() - 30);
        const recentCount = await this.prisma.broadcast.count({
            where: { businessId, createdAt: { gte: since }, status: { not: "FAILED" } },
        });
        if (recentCount >= MONTHLY_BROADCAST_LIMIT) {
            throw new BadRequestException(`حداکثر ${MONTHLY_BROADCAST_LIMIT} پیام همگانی در ماه مجاز است`);
        }
        const broadcast = await this.prisma.broadcast.create({
            data: { businessId, text: dto.text, mediaUrl: dto.mediaUrl, status: "SENDING" },
        });
        this.sendInBackground(businessId, broadcast.id, dto.text).catch((err) => this.logger.error(`Broadcast ${broadcast.id} failed: ${err}`));
        return broadcast;
    }
    async sendInBackground(businessId, broadcastId, text) {
        const customers = await this.prisma.customer.findMany({
            where: { businessId, blocked: false },
        });
        let sent = 0;
        let failed = 0;
        for (const customer of customers) {
            const ok = await this.runtime.broadcastToCustomer(businessId, customer.telegramUserId, text);
            if (ok)
                sent += 1;
            else {
                failed += 1;
                await this.prisma.customer.update({ where: { id: customer.id }, data: { blocked: true } });
            }
            await new Promise((resolve) => setTimeout(resolve, 50));
        }
        await this.prisma.broadcast.update({
            where: { id: broadcastId },
            data: { status: "DONE", sentCount: sent, failCount: failed },
        });
    }
};
BroadcastService = BroadcastService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        BotRuntimeService])
], BroadcastService);
export { BroadcastService };
//# sourceMappingURL=broadcast.service.js.map