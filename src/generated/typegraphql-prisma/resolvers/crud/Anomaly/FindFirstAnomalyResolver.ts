import * as TypeGraphQL from "type-graphql";
import { FindFirstAnomalyArgs } from "./args/FindFirstAnomalyArgs";
import { Anomaly } from "../../../models/Anomaly";

@TypeGraphQL.Resolver(_of => Anomaly)
export class FindFirstAnomalyResolver {
  @TypeGraphQL.Query(_returns => Anomaly, {
    nullable: true
  })
  async findFirstAnomaly(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstAnomalyArgs): Promise<Anomaly | null> {
    return ctx.prisma.anomaly.findFirst(args);
  }
}
