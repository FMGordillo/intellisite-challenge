import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnomalyCountAggregate } from "../outputs/AnomalyCountAggregate";
import { AnomalyMaxAggregate } from "../outputs/AnomalyMaxAggregate";
import { AnomalyMinAggregate } from "../outputs/AnomalyMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateAnomaly {
  @TypeGraphQL.Field(_type => AnomalyCountAggregate, {
    nullable: true
  })
  count!: AnomalyCountAggregate | null;

  @TypeGraphQL.Field(_type => AnomalyMinAggregate, {
    nullable: true
  })
  min!: AnomalyMinAggregate | null;

  @TypeGraphQL.Field(_type => AnomalyMaxAggregate, {
    nullable: true
  })
  max!: AnomalyMaxAggregate | null;
}
