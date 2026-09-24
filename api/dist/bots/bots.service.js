var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { PLAN_LIMITS } from "../common/plan-limits.js";
import { BotRuntimeService } from "./bot-runtime.service.js";
let BotsService = class BotsService {
    prisma;
    runtime;
    constructor(prisma, runtime) {
        this.prisma = prisma;
        this.runtime = runtime;
    }
    list(businessId) {
        return this.prisma.bot.findMany({
            where: { businessId },
            orderBy: { createdAt: "desc" },
            select: { id: true, username: true, isActive: true, createdAt: true },
        });
    }
    async create(businessId, token) {
        const business = await this.prisma.business.findUniqueOrThrow({ where: { id: businessId } });
        const limit = PLAN_LIMITS[business.planTier].maxBots;
        const currentCount = await this.prisma.bot.count({ where: { businessId } });
        if (currentCount >= limit) {
            throw new BadRequestException(`پلن فعلی شما حداکثر ${limit} ربات را پشتیبانی می‌کند`);
        }
        const me = await this.validateToken(token);
        const existing = await this.prisma.bot.findFirst({ where: { telegramBotId: String(me.id) } });
        if (existing) {
            throw new BadRequestException("این ربات قبلاً در تلبینو ثبت شده است");
        }
        const bot = await this.prisma.bot.create({
            data: { businessId, token, telegramBotId: String(me.id), username: me.username },
        });
        await this.runtime.startBot(bot);
        return { id: bot.id, username: bot.username, isActive: bot.isActive };
    }
    async remove(businessId, id) {
        const bot = await this.assertOwned(businessId, id);
        this.runtime.stopBot(bot.id);
        await this.prisma.bot.delete({ where: { id } });
        return { deleted: true };
    }
    async toggleActive(businessId, id, isActive) {
        const bot = await this.assertOwned(businessId, id);
        const updated = await this.prisma.bot.update({ where: { id }, data: { isActive } });
        if (isActive) {
            await this.runtime.startBot(updated);
        }
        else {
            this.runtime.stopBot(bot.id);
        }
        return { id: updated.id, isActive: updated.isActive };
    }
    async validateToken(token) {
        let res;
        try {
            res = await fetch(`https://api.telegram.org/bot${token}/getMe`);
        }
        catch {
            throw new BadRequestException("ارتباط با سرورهای تلگرام برقرار نشد — دوباره تلاش کنید");
        }
        const data = (await res.json());
        if (!data.ok || !data.result) {
            throw new BadRequestException(data.description ?? "توکن ربات نامعتبر است");
        }
        return data.result;
    }
    async assertOwned(businessId, id) {
        const bot = await this.prisma.bot.findUnique({ where: { id } });
        if (!bot || bot.businessId !== businessId)
            throw new NotFoundException("ربات پیدا نشد");
        return bot;
    }
};
BotsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        BotRuntimeService])
], BotsService);
export { BotsService };
//# sourceMappingURL=bots.service.js.map