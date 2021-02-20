import * as TypeGraphQL from "type-graphql";
import { UpsertAnomalyArgs } from "./args/UpsertAnomalyArgs";
import { Anomaly } from "../../../models/Anomaly";

@TypeGraphQL.Resolver(_of => Anomaly)
export class UpsertAnomalyResolver {
  @TypeGraphQL.Mutation(_returns => Anomaly, {
    nullable: false
  })
  async upsertAnomaly(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertAnomalyArgs): Promise<Anomaly> {
    return ctx.prisma.anomaly.upsert(args);
  }
}
