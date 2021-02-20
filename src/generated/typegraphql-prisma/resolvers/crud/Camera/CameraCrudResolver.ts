import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCameraArgs } from "./args/AggregateCameraArgs";
import { CreateCameraArgs } from "./args/CreateCameraArgs";
import { DeleteCameraArgs } from "./args/DeleteCameraArgs";
import { DeleteManyCameraArgs } from "./args/DeleteManyCameraArgs";
import { FindFirstCameraArgs } from "./args/FindFirstCameraArgs";
import { FindManyCameraArgs } from "./args/FindManyCameraArgs";
import { FindUniqueCameraArgs } from "./args/FindUniqueCameraArgs";
import { UpdateCameraArgs } from "./args/UpdateCameraArgs";
import { UpdateManyCameraArgs } from "./args/UpdateManyCameraArgs";
import { UpsertCameraArgs } from "./args/UpsertCameraArgs";
import { Camera } from "../../../models/Camera";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCamera } from "../../outputs/AggregateCamera";

@TypeGraphQL.Resolver(_of => Camera)
export class CameraCrudResolver {
  @TypeGraphQL.Query(_returns => Camera, {
    nullable: true
  })
  async camera(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCameraArgs): Promise<Camera | null> {
    return ctx.prisma.camera.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Camera, {
    nullable: true
  })
  async findFirstCamera(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCameraArgs): Promise<Camera | null> {
    return ctx.prisma.camera.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Camera], {
    nullable: false
  })
  async cameras(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCameraArgs): Promise<Camera[]> {
    return ctx.prisma.camera.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Camera, {
    nullable: false
  })
  async createCamera(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCameraArgs): Promise<Camera> {
    return ctx.prisma.camera.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Camera, {
    nullable: true
  })
  async deleteCamera(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCameraArgs): Promise<Camera | null> {
    return ctx.prisma.camera.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Camera, {
    nullable: true
  })
  async updateCamera(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCameraArgs): Promise<Camera | null> {
    return ctx.prisma.camera.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCamera(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCameraArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.camera.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCamera(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCameraArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.camera.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Camera, {
    nullable: false
  })
  async upsertCamera(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCameraArgs): Promise<Camera> {
    return ctx.prisma.camera.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCamera, {
    nullable: false
  })
  async aggregateCamera(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCameraArgs): Promise<AggregateCamera> {
    function transformFields(fields: Record<string, any>): Record<string, any> {
      return Object.fromEntries(
        Object.entries(fields)
          // remove __typename and others
          .filter(([key, value]) => !key.startsWith("__"))
          .map<[string, any]>(([key, value]) => {
            if (Object.keys(value).length === 0) {
              return [key, true];
            }
            return [key, transformFields(value)];
          }),
      );
    }

    return ctx.prisma.camera.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
