import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CameraCreateInput } from "../../../inputs/CameraCreateInput";
import { CameraUpdateInput } from "../../../inputs/CameraUpdateInput";
import { CameraWhereUniqueInput } from "../../../inputs/CameraWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCameraArgs {
  @TypeGraphQL.Field(_type => CameraWhereUniqueInput, {
    nullable: false
  })
  where!: CameraWhereUniqueInput;

  @TypeGraphQL.Field(_type => CameraCreateInput, {
    nullable: false
  })
  create!: CameraCreateInput;

  @TypeGraphQL.Field(_type => CameraUpdateInput, {
    nullable: false
  })
  update!: CameraUpdateInput;
}
