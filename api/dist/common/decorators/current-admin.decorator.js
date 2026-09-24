import { createParamDecorator } from "@nestjs/common";
export const CurrentAdmin = createParamDecorator((_data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.admin;
});
//# sourceMappingURL=current-admin.decorator.js.map