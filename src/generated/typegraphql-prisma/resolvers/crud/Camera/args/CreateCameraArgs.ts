import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CameraCreateInput } from "../../../inputs/CameraCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCameraArgs {
  @TypeGraphQL.Field(_type => CameraCreateInput, {
    nullable: false
  })
  data!: CameraCreateInput;
}
