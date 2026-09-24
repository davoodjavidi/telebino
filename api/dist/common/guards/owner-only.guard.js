var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ForbiddenException, Injectable } from "@nestjs/common";
let OwnerOnlyGuard = class OwnerOnlyGuard {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        if (request.user.role !== "OWNER") {
            throw new ForbiddenException("فقط مالک کسب‌وکار به این بخش دسترسی دارد");
        }
        return true;
    }
};
OwnerOnlyGuard = __decorate([
    Injectable()
], OwnerOnlyGuard);
export { OwnerOnlyGuard };
//# sourceMappingURL=owner-only.guard.js.map