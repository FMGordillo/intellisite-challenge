import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnomalyUpdateWithoutCameraInput } from "../inputs/AnomalyUpdateWithoutCameraInput";
import { AnomalyWhereUniqueInput } from "../inputs/AnomalyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnomalyUpdateWithWhereUniqueWithoutCameraInput {
  @TypeGraphQL.Field(_type => AnomalyWhereUniqueInput, {
    nullable: false
  })
  where!: AnomalyWhereUniqueInput;

  @TypeGraphQL.Field(_type => AnomalyUpdateWithoutCameraInput, {
    nullable: false
  })
  data!: AnomalyUpdateWithoutCameraInput;
}
