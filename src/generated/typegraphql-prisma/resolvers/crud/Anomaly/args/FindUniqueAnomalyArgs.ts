import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnomalyWhereUniqueInput } from "../../../inputs/AnomalyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAnomalyArgs {
  @TypeGraphQL.Field(_type => AnomalyWhereUniqueInput, {
    nullable: false
  })
  where!: AnomalyWhereUniqueInput;
}
