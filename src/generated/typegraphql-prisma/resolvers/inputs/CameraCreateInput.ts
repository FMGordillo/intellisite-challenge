import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnomalyCreateNestedManyWithoutCameraInput } from "../inputs/AnomalyCreateNestedManyWithoutCameraInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CameraCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  uuid!: string;

  @TypeGraphQL.Field(_type => AnomalyCreateNestedManyWithoutCameraInput, {
    nullable: true
  })
  anomalies?: AnomalyCreateNestedManyWithoutCameraInput | undefined;
}
