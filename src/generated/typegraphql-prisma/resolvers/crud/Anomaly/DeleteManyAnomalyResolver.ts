import * as TypeGraphQL from "type-graphql";
import { DeleteManyAnomalyArgs } from "./args/DeleteManyAnomalyArgs";
import { Anomaly } from "../../../models/Anomaly";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => Anomaly)
export class DeleteManyAnomalyResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyAnomaly(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyAnomalyArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.anomaly.deleteMany(args);
  }
}
