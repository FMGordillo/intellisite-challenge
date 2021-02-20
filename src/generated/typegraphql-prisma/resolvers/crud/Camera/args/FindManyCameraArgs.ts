import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CameraOrderByInput } from "../../../inputs/CameraOrderByInput";
import { CameraWhereInput } from "../../../inputs/CameraWhereInput";
import { CameraWhereUniqueInput } from "../../../inputs/CameraWhereUniqueInput";
import { CameraScalarFieldEnum } from "../../../../enums/CameraScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyCameraArgs {
  @TypeGraphQL.Field(_type => CameraWhereInput, {
    nullable: true
  })
  where?: CameraWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CameraOrderByInput], {
    nullable: true
  })
  orderBy?: CameraOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CameraWhereUniqueInput, {
    nullable: true
  })
  cursor?: CameraWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CameraScalarFieldEnum], {
    nullable: true
  })
  distinct?: "uuid"[] | undefined;
}
