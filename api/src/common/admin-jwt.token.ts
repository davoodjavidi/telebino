/**
 * Explicit DI token for the admin-scoped JwtService instance — deliberately
 * NOT the ambient `JwtService` class token, so there is zero chance of it
 * being resolved to (or shadowed by) the business-user JwtService that
 * AuthCommonModule provides globally with a different secret.
 */
export const ADMIN_JWT_SERVICE = Symbol("ADMIN_JWT_SERVICE");
