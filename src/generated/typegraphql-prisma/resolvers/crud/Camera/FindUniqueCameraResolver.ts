import * as TypeGraphQL from "type-graphql";
import { FindUniqueCameraArgs } from "./args/FindUniqueCameraArgs";
import { Camera } from "../../../models/Camera";

@TypeGraphQL.Resolver(_of => Camera)
export class FindUniqueCameraResolver {
  @TypeGraphQL.Query(_returns => Camera, {
    nullable: true
  })
  async camera(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCameraArgs): Promise<Camera | null> {
    return ctx.prisma.camera.findUnique(args);
  }
}
