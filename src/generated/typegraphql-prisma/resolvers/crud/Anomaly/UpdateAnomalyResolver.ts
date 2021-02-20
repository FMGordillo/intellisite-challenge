import * as TypeGraphQL from "type-graphql";
import { UpdateAnomalyArgs } from "./args/UpdateAnomalyArgs";
import { Anomaly } from "../../../models/Anomaly";

@TypeGraphQL.Resolver(_of => Anomaly)
export class UpdateAnomalyResolver {
  @TypeGraphQL.Mutation(_returns => Anomaly, {
    nullable: true
  })
  async updateAnomaly(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateAnomalyArgs): Promise<Anomaly | null> {
    return ctx.prisma.anomaly.update(args);
  }
}
