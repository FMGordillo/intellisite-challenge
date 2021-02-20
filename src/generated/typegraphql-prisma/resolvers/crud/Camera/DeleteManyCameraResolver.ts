import * as TypeGraphQL from "type-graphql";
import { DeleteManyCameraArgs } from "./args/DeleteManyCameraArgs";
import { Camera } from "../../../models/Camera";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => Camera)
export class DeleteManyCameraResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCamera(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCameraArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.camera.deleteMany(args);
  }
}
