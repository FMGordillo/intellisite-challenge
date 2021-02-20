import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateOrConnectWithoutAnomalyInput } from "../inputs/EventCreateOrConnectWithoutAnomalyInput";
import { EventCreateWithoutAnomalyInput } from "../inputs/EventCreateWithoutAnomalyInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EventCreateNestedManyWithoutAnomalyInput {
  @TypeGraphQL.Field(_type => [EventCreateWithoutAnomalyInput], {
    nullable: true
  })
  create?: EventCreateWithoutAnomalyInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventCreateOrConnectWithoutAnomalyInput], {
    nullable: true
  })
  connectOrCreate?: EventCreateOrConnectWithoutAnomalyInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventWhereUniqueInput], {
    nullable: true
  })
  connect?: EventWhereUniqueInput[] | undefined;
}
