import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CameraUpdateOneRequiredWithoutAnomaliesInput } from "../inputs/CameraUpdateOneRequiredWithoutAnomaliesInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EventUpdateManyWithoutAnomalyInput } from "../inputs/EventUpdateManyWithoutAnomalyInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnomalyUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  module_id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  module?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  json_version?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  timestamp?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EventUpdateManyWithoutAnomalyInput, {
    nullable: true
  })
  events?: EventUpdateManyWithoutAnomalyInput | undefined;

  @TypeGraphQL.Field(_type => CameraUpdateOneRequiredWithoutAnomaliesInput, {
    nullable: true
  })
  camera?: CameraUpdateOneRequiredWithoutAnomaliesInput | undefined;
}
