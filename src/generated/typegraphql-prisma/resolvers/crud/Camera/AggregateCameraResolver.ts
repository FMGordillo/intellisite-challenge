import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCameraArgs } from "./args/AggregateCameraArgs";
import { Camera } from "../../../models/Camera";
import { AggregateCamera } from "../../outputs/AggregateCamera";

@TypeGraphQL.Resolver(_of => Camera)
export class AggregateCameraResolver {
  @TypeGraphQL.Query(_returns => AggregateCamera, {
    nullable: false
  })
  async aggregateCamera(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCameraArgs): Promise<AggregateCamera> {
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

    return ctx.prisma.camera.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
