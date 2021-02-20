import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnomalyWhereInput } from "../../../inputs/AnomalyWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAnomalyArgs {
  @TypeGraphQL.Field(_type => AnomalyWhereInput, {
    nullable: true
  })
  where?: AnomalyWhereInput | undefined;
}
