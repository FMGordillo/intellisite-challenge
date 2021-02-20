import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CameraUpdateManyMutationInput } from "../../../inputs/CameraUpdateManyMutationInput";
import { CameraWhereInput } from "../../../inputs/CameraWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCameraArgs {
  @TypeGraphQL.Field(_type => CameraUpdateManyMutationInput, {
    nullable: false
  })
  data!: CameraUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CameraWhereInput, {
    nullable: true
  })
  where?: CameraWhereInput | undefined;
}
