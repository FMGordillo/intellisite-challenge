import * as TypeGraphQL from "type-graphql";
import { CreateCameraArgs } from "./args/CreateCameraArgs";
import { Camera } from "../../../models/Camera";

@TypeGraphQL.Resolver(_of => Camera)
export class CreateCameraResolver {
  @TypeGraphQL.Mutation(_returns => Camera, {
    nullable: false
  })
  async createCamera(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCameraArgs): Promise<Camera> {
    return ctx.prisma.camera.create(args);
  }
}
