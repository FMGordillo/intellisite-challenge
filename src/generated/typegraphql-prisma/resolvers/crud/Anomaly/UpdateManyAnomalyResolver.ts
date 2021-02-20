import * as TypeGraphQL from "type-graphql";
import { UpdateManyAnomalyArgs } from "./args/UpdateManyAnomalyArgs";
import { Anomaly } from "../../../models/Anomaly";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => Anomaly)
export class UpdateManyAnomalyResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyAnomaly(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyAnomalyArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.anomaly.updateMany(args);
  }
}
