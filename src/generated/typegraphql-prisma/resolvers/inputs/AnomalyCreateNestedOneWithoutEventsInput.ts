import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnomalyCreateOrConnectWithoutEventsInput } from "../inputs/AnomalyCreateOrConnectWithoutEventsInput";
import { AnomalyCreateWithoutEventsInput } from "../inputs/AnomalyCreateWithoutEventsInput";
import { AnomalyWhereUniqueInput } from "../inputs/AnomalyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnomalyCreateNestedOneWithoutEventsInput {
  @TypeGraphQL.Field(_type => AnomalyCreateWithoutEventsInput, {
    nullable: true
  })
  create?: AnomalyCreateWithoutEventsInput | undefined;

  @TypeGraphQL.Field(_type => AnomalyCreateOrConnectWithoutEventsInput, {
    nullable: true
  })
  connectOrCreate?: AnomalyCreateOrConnectWithoutEventsInput | undefined;

  @TypeGraphQL.Field(_type => AnomalyWhereUniqueInput, {
    nullable: true
  })
  connect?: AnomalyWhereUniqueInput | undefined;
}
