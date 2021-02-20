import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreatealertsInput } from "../inputs/EventCreatealertsInput";
import { EventCreateattributesInput } from "../inputs/EventCreateattributesInput";
import { EventCreateimagesInput } from "../inputs/EventCreateimagesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EventCreateWithoutAnomalyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  uuid?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  trajectory!: Prisma.InputJsonValue;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  instance?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  module_version?: string | undefined;

  @TypeGraphQL.Field(_type => EventCreateimagesInput, {
    nullable: true
  })
  images?: EventCreateimagesInput | undefined;

  @TypeGraphQL.Field(_type => EventCreateattributesInput, {
    nullable: true
  })
  attributes?: EventCreateattributesInput | undefined;

  @TypeGraphQL.Field(_type => EventCreatealertsInput, {
    nullable: true
  })
  alerts?: EventCreatealertsInput | undefined;
}
