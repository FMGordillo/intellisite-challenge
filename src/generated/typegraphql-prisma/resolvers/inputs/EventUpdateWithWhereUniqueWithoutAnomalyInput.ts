import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventUpdateWithoutAnomalyInput } from "../inputs/EventUpdateWithoutAnomalyInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EventUpdateWithWhereUniqueWithoutAnomalyInput {
  @TypeGraphQL.Field(_type => EventWhereUniqueInput, {
    nullable: false
  })
  where!: EventWhereUniqueInput;

  @TypeGraphQL.Field(_type => EventUpdateWithoutAnomalyInput, {
    nullable: false
  })
  data!: EventUpdateWithoutAnomalyInput;
}
