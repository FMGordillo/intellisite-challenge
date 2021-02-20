import * as TypeGraphQL from "type-graphql";
import { Anomaly } from "../../../models/Anomaly";
import { Camera } from "../../../models/Camera";
import { Event } from "../../../models/Event";
import { AnomalyEventsArgs } from "./args/AnomalyEventsArgs";

@TypeGraphQL.Resolver(_of => Anomaly)
export class AnomalyRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Event], {
    nullable: false
  })
  async events(@TypeGraphQL.Root() anomaly: Anomaly, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AnomalyEventsArgs): Promise<Event[]> {
    return ctx.prisma.anomaly.findUnique({
      where: {
        module_id: anomaly.module_id,
      },
    }).events(args);
  }

  @TypeGraphQL.FieldResolver(_type => Camera, {
    nullable: false
  })
  async camera(@TypeGraphQL.Root() anomaly: Anomaly, @TypeGraphQL.Ctx() ctx: any): Promise<Camera> {
    return ctx.prisma.anomaly.findUnique({
      where: {
        module_id: anomaly.module_id,
      },
    }).camera({});
  }
}
