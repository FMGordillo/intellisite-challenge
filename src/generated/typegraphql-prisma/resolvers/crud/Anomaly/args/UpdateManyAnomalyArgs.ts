import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnomalyUpdateManyMutationInput } from "../../../inputs/AnomalyUpdateManyMutationInput";
import { AnomalyWhereInput } from "../../../inputs/AnomalyWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAnomalyArgs {
  @TypeGraphQL.Field(_type => AnomalyUpdateManyMutationInput, {
    nullable: false
  })
  data!: AnomalyUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AnomalyWhereInput, {
    nullable: true
  })
  where?: AnomalyWhereInput | undefined;
}
