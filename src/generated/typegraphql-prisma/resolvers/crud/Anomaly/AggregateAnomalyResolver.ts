import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAnomalyArgs } from "./args/AggregateAnomalyArgs";
import { Anomaly } from "../../../models/Anomaly";
import { AggregateAnomaly } from "../../outputs/AggregateAnomaly";

@TypeGraphQL.Resolver(_of => Anomaly)
export class AggregateAnomalyResolver {
  @TypeGraphQL.Query(_returns => AggregateAnomaly, {
    nullable: false
  })
  async aggregateAnomaly(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAnomalyArgs): Promise<AggregateAnomaly> {
    function transformFields(fields: Record<string, any>): Record<string, any> {
      return Object.fromEntries(
        Object.entries(fields)
          // remove __typename and others
          .filter(([key, value]) => !key.startsWith("__"))
          .map<[string, any]>(([key, value]) => {
            if (Object.keys(value).length === 0) {
              return [key, true];
            }
            return [key, transformFields(value)];
          }),
      );
    }

    return ctx.prisma.anomaly.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
