import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnomalyCreateWithoutEventsInput } from "../inputs/AnomalyCreateWithoutEventsInput";
import { AnomalyWhereUniqueInput } from "../inputs/AnomalyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnomalyCreateOrConnectWithoutEventsInput {
  @TypeGraphQL.Field(_type => AnomalyWhereUniqueInput, {
    nullable: false
  })
  where!: AnomalyWhereUniqueInput;

  @TypeGraphQL.Field(_type => AnomalyCreateWithoutEventsInput, {
    nullable: false
  })
  create!: AnomalyCreateWithoutEventsInput;
}
