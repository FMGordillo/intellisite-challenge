import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnomalyCreateWithoutCameraInput } from "../inputs/AnomalyCreateWithoutCameraInput";
import { AnomalyWhereUniqueInput } from "../inputs/AnomalyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnomalyCreateOrConnectWithoutCameraInput {
  @TypeGraphQL.Field(_type => AnomalyWhereUniqueInput, {
    nullable: false
  })
  where!: AnomalyWhereUniqueInput;

  @TypeGraphQL.Field(_type => AnomalyCreateWithoutCameraInput, {
    nullable: false
  })
  create!: AnomalyCreateWithoutCameraInput;
}
