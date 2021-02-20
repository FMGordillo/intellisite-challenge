import * as TypeGraphQL from "type-graphql";
import { FindUniqueAnomalyArgs } from "./args/FindUniqueAnomalyArgs";
import { Anomaly } from "../../../models/Anomaly";

@TypeGraphQL.Resolver(_of => Anomaly)
export class FindUniqueAnomalyResolver {
  @TypeGraphQL.Query(_returns => Anomaly, {
    nullable: true
  })
  async anomaly(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueAnomalyArgs): Promise<Anomaly | null> {
    return ctx.prisma.anomaly.findUnique(args);
  }
}
