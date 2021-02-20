import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateEventArgs } from "./args/AggregateEventArgs";
import { CreateEventArgs } from "./args/CreateEventArgs";
import { DeleteEventArgs } from "./args/DeleteEventArgs";
import { DeleteManyEventArgs } from "./args/DeleteManyEventArgs";
import { FindFirstEventArgs } from "./args/FindFirstEventArgs";
import { FindManyEventArgs } from "./args/FindManyEventArgs";
import { FindUniqueEventArgs } from "./args/FindUniqueEventArgs";
import { UpdateEventArgs } from "./args/UpdateEventArgs";
import { UpdateManyEventArgs } from "./args/UpdateManyEventArgs";
import { UpsertEventArgs } from "./args/UpsertEventArgs";
import { Event } from "../../../models/Event";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateEvent } from "../../outputs/AggregateEvent";

@TypeGraphQL.Resolver(_of => Event)
export class EventCrudResolver {
  @TypeGraphQL.Query(_returns => Event, {
    nullable: true
  })
  async event(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueEventArgs): Promise<Event | null> {
    return ctx.prisma.event.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Event, {
    nullable: true
  })
  async findFirstEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstEventArgs): Promise<Event | null> {
    return ctx.prisma.event.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Event], {
    nullable: false
  })
  async events(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyEventArgs): Promise<Event[]> {
    return ctx.prisma.event.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Event, {
    nullable: false
  })
  async createEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateEventArgs): Promise<Event> {
    return ctx.prisma.event.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Event, {
    nullable: true
  })
  async deleteEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteEventArgs): Promise<Event | null> {
    return ctx.prisma.event.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Event, {
    nullable: true
  })
  async updateEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateEventArgs): Promise<Event | null> {
    return ctx.prisma.event.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyEventArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.event.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyEventArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.event.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Event, {
    nullable: false
  })
  async upsertEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertEventArgs): Promise<Event> {
    return ctx.prisma.event.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateEvent, {
    nullable: false
  })
  async aggregateEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEventArgs): Promise<AggregateEvent> {
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

    return ctx.prisma.event.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
