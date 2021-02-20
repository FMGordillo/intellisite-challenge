import * as TypeGraphQL from "type-graphql";
import { UpdateEventArgs } from "./args/UpdateEventArgs";
import { Event } from "../../../models/Event";

@TypeGraphQL.Resolver(_of => Event)
export class UpdateEventResolver {
  @TypeGraphQL.Mutation(_returns => Event, {
    nullable: true
  })
  async updateEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateEventArgs): Promise<Event | null> {
    return ctx.prisma.event.update(args);
  }
}
