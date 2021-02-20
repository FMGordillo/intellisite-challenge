import * as TypeGraphQL from "type-graphql";
import { FindUniqueEventArgs } from "./args/FindUniqueEventArgs";
import { Event } from "../../../models/Event";

@TypeGraphQL.Resolver(_of => Event)
export class FindUniqueEventResolver {
  @TypeGraphQL.Query(_returns => Event, {
    nullable: true
  })
  async event(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueEventArgs): Promise<Event | null> {
    return ctx.prisma.event.findUnique(args);
  }
}
