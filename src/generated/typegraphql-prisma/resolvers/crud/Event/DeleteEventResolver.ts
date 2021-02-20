import * as TypeGraphQL from "type-graphql";
import { DeleteEventArgs } from "./args/DeleteEventArgs";
import { Event } from "../../../models/Event";

@TypeGraphQL.Resolver(_of => Event)
export class DeleteEventResolver {
  @TypeGraphQL.Mutation(_returns => Event, {
    nullable: true
  })
  async deleteEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteEventArgs): Promise<Event | null> {
    return ctx.prisma.event.delete(args);
  }
}
