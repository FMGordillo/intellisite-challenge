import * as TypeGraphQL from "type-graphql";
import { FindFirstEventArgs } from "./args/FindFirstEventArgs";
import { Event } from "../../../models/Event";

@TypeGraphQL.Resolver(_of => Event)
export class FindFirstEventResolver {
  @TypeGraphQL.Query(_returns => Event, {
    nullable: true
  })
  async findFirstEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstEventArgs): Promise<Event | null> {
    return ctx.prisma.event.findFirst(args);
  }
}
