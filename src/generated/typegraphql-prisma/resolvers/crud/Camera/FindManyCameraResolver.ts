import * as TypeGraphQL from "type-graphql";
import { FindManyCameraArgs } from "./args/FindManyCameraArgs";
import { Camera } from "../../../models/Camera";

@TypeGraphQL.Resolver(_of => Camera)
export class FindManyCameraResolver {
  @TypeGraphQL.Query(_returns => [Camera], {
    nullable: false
  })
  async cameras(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCameraArgs): Promise<Camera[]> {
    return ctx.prisma.camera.findMany(args);
  }
}
