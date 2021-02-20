import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnomalyUpdateInput } from "../../../inputs/AnomalyUpdateInput";
import { AnomalyWhereUniqueInput } from "../../../inputs/AnomalyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateAnomalyArgs {
  @TypeGraphQL.Field(_type => AnomalyUpdateInput, {
    nullable: false
  })
  data!: AnomalyUpdateInput;

  @TypeGraphQL.Field(_type => AnomalyWhereUniqueInput, {
    nullable: false
  })
  where!: AnomalyWhereUniqueInput;
}
