import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAnomalyArgs } from "./args/AggregateAnomalyArgs";
import { CreateAnomalyArgs } from "./args/CreateAnomalyArgs";
import { DeleteAnomalyArgs } from "./args/DeleteAnomalyArgs";
import { DeleteManyAnomalyArgs } from "./args/DeleteManyAnomalyArgs";
import { FindFirstAnomalyArgs } from "./args/FindFirstAnomalyArgs";
import { FindManyAnomalyArgs } from "./args/FindManyAnomalyArgs";
import { FindUniqueAnomalyArgs } from "./args/FindUniqueAnomalyArgs";
import { UpdateAnomalyArgs } from "./args/UpdateAnomalyArgs";
import { UpdateManyAnomalyArgs } from "./args/UpdateManyAnomalyArgs";
import { UpsertAnomalyArgs } from "./args/UpsertAnomalyArgs";
import { Anomaly } from "../../../models/Anomaly";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateAnomaly } from "../../outputs/AggregateAnomaly";

@TypeGraphQL.Resolver(_of => Anomaly)
export class AnomalyCrudResolver {
  @TypeGraphQL.Query(_returns => Anomaly, {
    nullable: true
  })
  async anomaly(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueAnomalyArgs): Promise<Anomaly | null> {
    return ctx.prisma.anomaly.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Anomaly, {
    nullable: true
  })
  async findFirstAnomaly(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstAnomalyArgs): Promise<Anomaly | null> {
    return ctx.prisma.anomaly.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Anomaly], {
    nullable: false
  })
  async anomalies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyAnomalyArgs): Promise<Anomaly[]> {
    return ctx.prisma.anomaly.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Anomaly, {
    nullable: false
  })
  async createAnomaly(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateAnomalyArgs): Promise<Anomaly> {
    return ctx.prisma.anomaly.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Anomaly, {
    nullable: true
  })
  async deleteAnomaly(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteAnomalyArgs): Promise<Anomaly | null> {
    return ctx.prisma.anomaly.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Anomaly, {
    nullable: true
  })
  async updateAnomaly(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateAnomalyArgs): Promise<Anomaly | null> {
    return ctx.prisma.anomaly.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyAnomaly(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyAnomalyArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.anomaly.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyAnomaly(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyAnomalyArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.anomaly.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Anomaly, {
    nullable: false
  })
  async upsertAnomaly(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertAnomalyArgs): Promise<Anomaly> {
    return ctx.prisma.anomaly.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateAnomaly, {
    nullable: false
  })
  async aggregateAnomaly(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAnomalyArgs): Promise<AggregateAnomaly> {
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

    return ctx.prisma.anomaly.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
