import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CameraWhereUniqueInput } from "../../../inputs/CameraWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteCameraArgs {
  @TypeGraphQL.Field(_type => CameraWhereUniqueInput, {
    nullable: false
  })
  where!: CameraWhereUniqueInput;
}
