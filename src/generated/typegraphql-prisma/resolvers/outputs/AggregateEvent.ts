import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventAvgAggregate } from "../outputs/EventAvgAggregate";
import { EventCountAggregate } from "../outputs/EventCountAggregate";
import { EventMaxAggregate } from "../outputs/EventMaxAggregate";
import { EventMinAggregate } from "../outputs/EventMinAggregate";
import { EventSumAggregate } from "../outputs/EventSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateEvent {
  @TypeGraphQL.Field(_type => EventCountAggregate, {
    nullable: true
  })
  count!: EventCountAggregate | null;

  @TypeGraphQL.Field(_type => EventAvgAggregate, {
    nullable: true
  })
  avg!: EventAvgAggregate | null;

  @TypeGraphQL.Field(_type => EventSumAggregate, {
    nullable: true
  })
  sum!: EventSumAggregate | null;

  @TypeGraphQL.Field(_type => EventMinAggregate, {
    nullable: true
  })
  min!: EventMinAggregate | null;

  @TypeGraphQL.Field(_type => EventMaxAggregate, {
    nullable: true
  })
  max!: EventMaxAggregate | null;
}
