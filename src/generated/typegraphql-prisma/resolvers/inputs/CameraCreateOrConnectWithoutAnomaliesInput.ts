import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CameraCreateWithoutAnomaliesInput } from "../inputs/CameraCreateWithoutAnomaliesInput";
import { CameraWhereUniqueInput } from "../inputs/CameraWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CameraCreateOrConnectWithoutAnomaliesInput {
  @TypeGraphQL.Field(_type => CameraWhereUniqueInput, {
    nullable: false
  })
  where!: CameraWhereUniqueInput;

  @TypeGraphQL.Field(_type => CameraCreateWithoutAnomaliesInput, {
    nullable: false
  })
  create!: CameraCreateWithoutAnomaliesInput;
}
