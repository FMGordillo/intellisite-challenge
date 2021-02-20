import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CameraOrderByInput } from "../../../inputs/CameraOrderByInput";
import { CameraWhereInput } from "../../../inputs/CameraWhereInput";
import { CameraWhereUniqueInput } from "../../../inputs/CameraWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCameraArgs {
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
}
