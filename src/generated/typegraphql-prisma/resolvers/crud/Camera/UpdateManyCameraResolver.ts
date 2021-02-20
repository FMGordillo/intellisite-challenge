import * as TypeGraphQL from "type-graphql";
import { UpdateManyCameraArgs } from "./args/UpdateManyCameraArgs";
import { Camera } from "../../../models/Camera";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => Camera)
export class UpdateManyCameraResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCamera(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCameraArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.camera.updateMany(args);
  }
}
