import * as TypeGraphQL from "type-graphql";
import { UpdateCameraArgs } from "./args/UpdateCameraArgs";
import { Camera } from "../../../models/Camera";

@TypeGraphQL.Resolver(_of => Camera)
export class UpdateCameraResolver {
  @TypeGraphQL.Mutation(_returns => Camera, {
    nullable: true
  })
  async updateCamera(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCameraArgs): Promise<Camera | null> {
    return ctx.prisma.camera.update(args);
  }
}
