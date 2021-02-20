import * as TypeGraphQL from "type-graphql";
import { CreateAnomalyArgs } from "./args/CreateAnomalyArgs";
import { Anomaly } from "../../../models/Anomaly";

@TypeGraphQL.Resolver(_of => Anomaly)
export class CreateAnomalyResolver {
  @TypeGraphQL.Mutation(_returns => Anomaly, {
    nullable: false
  })
  async createAnomaly(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateAnomalyArgs): Promise<Anomaly> {
    return ctx.prisma.anomaly.create(args);
  }
}
