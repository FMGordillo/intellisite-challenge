import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnomalyCreateInput } from "../../../inputs/AnomalyCreateInput";

@TypeGraphQL.ArgsType()
export class CreateAnomalyArgs {
  @TypeGraphQL.Field(_type => AnomalyCreateInput, {
    nullable: false
  })
  data!: AnomalyCreateInput;
}
