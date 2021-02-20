import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnomalyCreateWithoutEventsInput } from "../inputs/AnomalyCreateWithoutEventsInput";
import { AnomalyUpdateWithoutEventsInput } from "../inputs/AnomalyUpdateWithoutEventsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnomalyUpsertWithoutEventsInput {
  @TypeGraphQL.Field(_type => AnomalyUpdateWithoutEventsInput, {
    nullable: false
  })
  update!: AnomalyUpdateWithoutEventsInput;

  @TypeGraphQL.Field(_type => AnomalyCreateWithoutEventsInput, {
    nullable: false
  })
  create!: AnomalyCreateWithoutEventsInput;
}
