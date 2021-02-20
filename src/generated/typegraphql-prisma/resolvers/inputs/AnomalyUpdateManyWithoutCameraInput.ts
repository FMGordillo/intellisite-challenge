import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnomalyCreateOrConnectWithoutCameraInput } from "../inputs/AnomalyCreateOrConnectWithoutCameraInput";
import { AnomalyCreateWithoutCameraInput } from "../inputs/AnomalyCreateWithoutCameraInput";
import { AnomalyScalarWhereInput } from "../inputs/AnomalyScalarWhereInput";
import { AnomalyUpdateManyWithWhereWithoutCameraInput } from "../inputs/AnomalyUpdateManyWithWhereWithoutCameraInput";
import { AnomalyUpdateWithWhereUniqueWithoutCameraInput } from "../inputs/AnomalyUpdateWithWhereUniqueWithoutCameraInput";
import { AnomalyUpsertWithWhereUniqueWithoutCameraInput } from "../inputs/AnomalyUpsertWithWhereUniqueWithoutCameraInput";
import { AnomalyWhereUniqueInput } from "../inputs/AnomalyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnomalyUpdateManyWithoutCameraInput {
  @TypeGraphQL.Field(_type => [AnomalyCreateWithoutCameraInput], {
    nullable: true
  })
  create?: AnomalyCreateWithoutCameraInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnomalyCreateOrConnectWithoutCameraInput], {
    nullable: true
  })
  connectOrCreate?: AnomalyCreateOrConnectWithoutCameraInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnomalyUpsertWithWhereUniqueWithoutCameraInput], {
    nullable: true
  })
  upsert?: AnomalyUpsertWithWhereUniqueWithoutCameraInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnomalyWhereUniqueInput], {
    nullable: true
  })
  connect?: AnomalyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnomalyWhereUniqueInput], {
    nullable: true
  })
  set?: AnomalyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnomalyWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AnomalyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnomalyWhereUniqueInput], {
    nullable: true
  })
  delete?: AnomalyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnomalyUpdateWithWhereUniqueWithoutCameraInput], {
    nullable: true
  })
  update?: AnomalyUpdateWithWhereUniqueWithoutCameraInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnomalyUpdateManyWithWhereWithoutCameraInput], {
    nullable: true
  })
  updateMany?: AnomalyUpdateManyWithWhereWithoutCameraInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnomalyScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AnomalyScalarWhereInput[] | undefined;
}
