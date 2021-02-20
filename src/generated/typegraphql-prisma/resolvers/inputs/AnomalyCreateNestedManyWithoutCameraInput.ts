import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnomalyCreateOrConnectWithoutCameraInput } from "../inputs/AnomalyCreateOrConnectWithoutCameraInput";
import { AnomalyCreateWithoutCameraInput } from "../inputs/AnomalyCreateWithoutCameraInput";
import { AnomalyWhereUniqueInput } from "../inputs/AnomalyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnomalyCreateNestedManyWithoutCameraInput {
  @TypeGraphQL.Field(_type => [AnomalyCreateWithoutCameraInput], {
    nullable: true
  })
  create?: AnomalyCreateWithoutCameraInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnomalyCreateOrConnectWithoutCameraInput], {
    nullable: true
  })
  connectOrCreate?: AnomalyCreateOrConnectWithoutCameraInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnomalyWhereUniqueInput], {
    nullable: true
  })
  connect?: AnomalyWhereUniqueInput[] | undefined;
}
