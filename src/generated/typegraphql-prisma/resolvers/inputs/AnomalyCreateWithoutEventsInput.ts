import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CameraCreateNestedOneWithoutAnomaliesInput } from "../inputs/CameraCreateNestedOneWithoutAnomaliesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnomalyCreateWithoutEventsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  module_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  module!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  json_version?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  timestamp!: Date;

  @TypeGraphQL.Field(_type => CameraCreateNestedOneWithoutAnomaliesInput, {
    nullable: false
  })
  camera!: CameraCreateNestedOneWithoutAnomaliesInput;
}
