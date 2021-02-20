import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnomalyCreateWithoutCameraInput } from "../inputs/AnomalyCreateWithoutCameraInput";
import { AnomalyUpdateWithoutCameraInput } from "../inputs/AnomalyUpdateWithoutCameraInput";
import { AnomalyWhereUniqueInput } from "../inputs/AnomalyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnomalyUpsertWithWhereUniqueWithoutCameraInput {
  @TypeGraphQL.Field(_type => AnomalyWhereUniqueInput, {
    nullable: false
  })
  where!: AnomalyWhereUniqueInput;

  @TypeGraphQL.Field(_type => AnomalyUpdateWithoutCameraInput, {
    nullable: false
  })
  update!: AnomalyUpdateWithoutCameraInput;

  @TypeGraphQL.Field(_type => AnomalyCreateWithoutCameraInput, {
    nullable: false
  })
  create!: AnomalyCreateWithoutCameraInput;
}
