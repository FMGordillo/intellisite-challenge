import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CameraCreateWithoutAnomaliesInput } from "../inputs/CameraCreateWithoutAnomaliesInput";
import { CameraUpdateWithoutAnomaliesInput } from "../inputs/CameraUpdateWithoutAnomaliesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CameraUpsertWithoutAnomaliesInput {
  @TypeGraphQL.Field(_type => CameraUpdateWithoutAnomaliesInput, {
    nullable: false
  })
  update!: CameraUpdateWithoutAnomaliesInput;

  @TypeGraphQL.Field(_type => CameraCreateWithoutAnomaliesInput, {
    nullable: false
  })
  create!: CameraCreateWithoutAnomaliesInput;
}
