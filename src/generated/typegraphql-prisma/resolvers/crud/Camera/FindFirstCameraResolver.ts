import * as TypeGraphQL from "type-graphql";
import { FindFirstCameraArgs } from "./args/FindFirstCameraArgs";
import { Camera } from "../../../models/Camera";

@TypeGraphQL.Resolver(_of => Camera)
export class FindFirstCameraResolver {
  @TypeGraphQL.Query(_returns => Camera, {
    nullable: true
  })
  async findFirstCamera(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCameraArgs): Promise<Camera | null> {
    return ctx.prisma.camera.findFirst(args);
  }
}
