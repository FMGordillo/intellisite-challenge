import * as TypeGraphQL from "type-graphql";
import { FindManyEventArgs } from "./args/FindManyEventArgs";
import { Event } from "../../../models/Event";

@TypeGraphQL.Resolver(_of => Event)
export class FindManyEventResolver {
  @TypeGraphQL.Query(_returns => [Event], {
    nullable: false
  })
  async events(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyEventArgs): Promise<Event[]> {
    return ctx.prisma.event.findMany(args);
  }
}
