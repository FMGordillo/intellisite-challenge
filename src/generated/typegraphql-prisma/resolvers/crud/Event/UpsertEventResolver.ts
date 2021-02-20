import * as TypeGraphQL from "type-graphql";
import { UpsertEventArgs } from "./args/UpsertEventArgs";
import { Event } from "../../../models/Event";

@TypeGraphQL.Resolver(_of => Event)
export class UpsertEventResolver {
  @TypeGraphQL.Mutation(_returns => Event, {
    nullable: false
  })
  async upsertEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertEventArgs): Promise<Event> {
    return ctx.prisma.event.upsert(args);
  }
}
