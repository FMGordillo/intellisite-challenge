import * as TypeGraphQL from "type-graphql";
import { Anomaly } from "../../../models/Anomaly";
import { Event } from "../../../models/Event";

@TypeGraphQL.Resolver(_of => Event)
export class EventRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Anomaly, {
    nullable: true
  })
  async anomaly(@TypeGraphQL.Root() event: Event, @TypeGraphQL.Ctx() ctx: any): Promise<Anomaly | null> {
    return ctx.prisma.event.findUnique({
      where: {
        id: event.id,
      },
    }).anomaly({});
  }
}
