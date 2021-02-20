import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CameraUpdateInput } from "../../../inputs/CameraUpdateInput";
import { CameraWhereUniqueInput } from "../../../inputs/CameraWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCameraArgs {
  @TypeGraphQL.Field(_type => CameraUpdateInput, {
    nullable: false
  })
  data!: CameraUpdateInput;

  @TypeGraphQL.Field(_type => CameraWhereUniqueInput, {
    nullable: false
  })
  where!: CameraWhereUniqueInput;
}
