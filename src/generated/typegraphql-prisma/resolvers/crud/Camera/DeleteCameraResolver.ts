import * as TypeGraphQL from "type-graphql";
import { DeleteCameraArgs } from "./args/DeleteCameraArgs";
import { Camera } from "../../../models/Camera";

@TypeGraphQL.Resolver(_of => Camera)
export class DeleteCameraResolver {
  @TypeGraphQL.Mutation(_returns => Camera, {
    nullable: true
  })
  async deleteCamera(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCameraArgs): Promise<Camera | null> {
    return ctx.prisma.camera.delete(args);
  }
}
