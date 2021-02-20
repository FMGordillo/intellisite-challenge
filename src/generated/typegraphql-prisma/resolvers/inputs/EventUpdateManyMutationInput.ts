import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventUpdatealertsInput } from "../inputs/EventUpdatealertsInput";
import { EventUpdateattributesInput } from "../inputs/EventUpdateattributesInput";
import { EventUpdateimagesInput } from "../inputs/EventUpdateimagesInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EventUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  uuid?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  trajectory?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  instance?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  module_version?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EventUpdateimagesInput, {
    nullable: true
  })
  images?: EventUpdateimagesInput | undefined;

  @TypeGraphQL.Field(_type => EventUpdateattributesInput, {
    nullable: true
  })
  attributes?: EventUpdateattributesInput | undefined;

  @TypeGraphQL.Field(_type => EventUpdatealertsInput, {
    nullable: true
  })
  alerts?: EventUpdatealertsInput | undefined;
}
