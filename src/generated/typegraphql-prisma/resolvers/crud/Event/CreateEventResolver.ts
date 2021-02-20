import * as TypeGraphQL from "type-graphql";
import { CreateEventArgs } from "./args/CreateEventArgs";
import { Event } from "../../../models/Event";

@TypeGraphQL.Resolver(_of => Event)
export class CreateEventResolver {
  @TypeGraphQL.Mutation(_returns => Event, {
    nullable: false
  })
  async createEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateEventArgs): Promise<Event> {
    return ctx.prisma.event.create(args);
  }
}
