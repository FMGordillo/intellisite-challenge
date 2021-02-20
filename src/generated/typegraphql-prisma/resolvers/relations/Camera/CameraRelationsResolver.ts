import * as TypeGraphQL from "type-graphql";
import { Anomaly } from "../../../models/Anomaly";
import { Camera } from "../../../models/Camera";
import { CameraAnomaliesArgs } from "./args/CameraAnomaliesArgs";

@TypeGraphQL.Resolver(_of => Camera)
export class CameraRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Anomaly], {
    nullable: false
  })
  async anomalies(@TypeGraphQL.Root() camera: Camera, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CameraAnomaliesArgs): Promise<Anomaly[]> {
    return ctx.prisma.camera.findUnique({
      where: {
        uuid: camera.uuid,
      },
    }).anomalies(args);
  }
}
