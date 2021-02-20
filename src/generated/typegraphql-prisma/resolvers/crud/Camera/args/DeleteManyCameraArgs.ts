import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CameraWhereInput } from "../../../inputs/CameraWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCameraArgs {
  @TypeGraphQL.Field(_type => CameraWhereInput, {
    nullable: true
  })
  where?: CameraWhereInput | undefined;
}
