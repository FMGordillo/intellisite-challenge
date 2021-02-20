import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateWithoutAnomalyInput } from "../inputs/EventCreateWithoutAnomalyInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EventCreateOrConnectWithoutAnomalyInput {
  @TypeGraphQL.Field(_type => EventWhereUniqueInput, {
    nullable: false
  })
  where!: EventWhereUniqueInput;

  @TypeGraphQL.Field(_type => EventCreateWithoutAnomalyInput, {
    nullable: false
  })
  create!: EventCreateWithoutAnomalyInput;
}
