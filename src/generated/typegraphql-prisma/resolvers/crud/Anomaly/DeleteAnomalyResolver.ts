import * as TypeGraphQL from "type-graphql";
import { DeleteAnomalyArgs } from "./args/DeleteAnomalyArgs";
import { Anomaly } from "../../../models/Anomaly";

@TypeGraphQL.Resolver(_of => Anomaly)
export class DeleteAnomalyResolver {
  @TypeGraphQL.Mutation(_returns => Anomaly, {
    nullable: true
  })
  async deleteAnomaly(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteAnomalyArgs): Promise<Anomaly | null> {
    return ctx.prisma.anomaly.delete(args);
  }
}
