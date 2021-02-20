import * as TypeGraphQL from "type-graphql";
import { UpsertCameraArgs } from "./args/UpsertCameraArgs";
import { Camera } from "../../../models/Camera";

@TypeGraphQL.Resolver(_of => Camera)
export class UpsertCameraResolver {
  @TypeGraphQL.Mutation(_returns => Camera, {
    nullable: false
  })
  async upsertCamera(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCameraArgs): Promise<Camera> {
    return ctx.prisma.camera.upsert(args);
  }
}
