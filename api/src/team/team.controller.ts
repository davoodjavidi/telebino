import { Body, Controller, Delete, Get, Param, Post, UseGuards } from "@nestjs/common";
import { TeamService } from "./team.service.js";
import { AddMemberDto } from "./dto/add-member.dto.js";
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard.js";
import { OwnerOnlyGuard } from "../common/guards/owner-only.guard.js";
import { CurrentBusinessId } from "../common/decorators/current-business-id.decorator.js";

@Controller("team")
@UseGuards(JwtAuthGuard)
export class TeamController {
  constructor(private readonly team: TeamService) {}

  @Get()
  list(@CurrentBusinessId() businessId: string) {
    return this.team.list(businessId);
  }

  @Post()
  @UseGuards(OwnerOnlyGuard)
  add(@CurrentBusinessId() businessId: string, @Body() dto: AddMemberDto) {
    return this.team.addMember(businessId, dto.phone);
  }

  @Delete(":id")
  @UseGuards(OwnerOnlyGuard)
  remove(@CurrentBusinessId() businessId: string, @Param("id") id: string) {
    return this.team.removeMember(businessId, id);
  }
}
