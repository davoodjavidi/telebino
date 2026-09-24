import { createParamDecorator } from "@nestjs/common";
export const CurrentBusinessId = createParamDecorator((_data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user.businessId;
});
//# sourceMappingURL=current-business-id.decorator.js.map