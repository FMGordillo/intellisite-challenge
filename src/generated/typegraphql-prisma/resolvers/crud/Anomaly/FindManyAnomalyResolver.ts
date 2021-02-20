import * as TypeGraphQL from "type-graphql";
import { FindManyAnomalyArgs } from "./args/FindManyAnomalyArgs";
import { Anomaly } from "../../../models/Anomaly";

@TypeGraphQL.Resolver(_of => Anomaly)
export class FindManyAnomalyResolver {
  @TypeGraphQL.Query(_returns => [Anomaly], {
    nullable: false
  })
  async anomalies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyAnomalyArgs): Promise<Anomaly[]> {
    return ctx.prisma.anomaly.findMany(args);
  }
}
