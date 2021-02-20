import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateEventArgs } from "./args/AggregateEventArgs";
import { Event } from "../../../models/Event";
import { AggregateEvent } from "../../outputs/AggregateEvent";

@TypeGraphQL.Resolver(_of => Event)
export class AggregateEventResolver {
  @TypeGraphQL.Query(_returns => AggregateEvent, {
    nullable: false
  })
  async aggregateEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEventArgs): Promise<AggregateEvent> {
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

    return ctx.prisma.event.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
