import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CameraCreateOrConnectWithoutAnomaliesInput } from "../inputs/CameraCreateOrConnectWithoutAnomaliesInput";
import { CameraCreateWithoutAnomaliesInput } from "../inputs/CameraCreateWithoutAnomaliesInput";
import { CameraWhereUniqueInput } from "../inputs/CameraWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CameraCreateNestedOneWithoutAnomaliesInput {
  @TypeGraphQL.Field(_type => CameraCreateWithoutAnomaliesInput, {
    nullable: true
  })
  create?: CameraCreateWithoutAnomaliesInput | undefined;

  @TypeGraphQL.Field(_type => CameraCreateOrConnectWithoutAnomaliesInput, {
    nullable: true
  })
  connectOrCreate?: CameraCreateOrConnectWithoutAnomaliesInput | undefined;

  @TypeGraphQL.Field(_type => CameraWhereUniqueInput, {
    nullable: true
  })
  connect?: CameraWhereUniqueInput | undefined;
}
