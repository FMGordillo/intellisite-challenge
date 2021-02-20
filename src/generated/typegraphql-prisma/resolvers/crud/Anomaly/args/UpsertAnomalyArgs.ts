import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnomalyCreateInput } from "../../../inputs/AnomalyCreateInput";
import { AnomalyUpdateInput } from "../../../inputs/AnomalyUpdateInput";
import { AnomalyWhereUniqueInput } from "../../../inputs/AnomalyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertAnomalyArgs {
  @TypeGraphQL.Field(_type => AnomalyWhereUniqueInput, {
    nullable: false
  })
  where!: AnomalyWhereUniqueInput;

  @TypeGraphQL.Field(_type => AnomalyCreateInput, {
    nullable: false
  })
  create!: AnomalyCreateInput;

  @TypeGraphQL.Field(_type => AnomalyUpdateInput, {
    nullable: false
  })
  update!: AnomalyUpdateInput;
}
