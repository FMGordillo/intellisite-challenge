import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnomalyWhereInput } from "../inputs/AnomalyWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnomalyRelationFilter {
  @TypeGraphQL.Field(_type => AnomalyWhereInput, {
    nullable: true
  })
  is?: AnomalyWhereInput | undefined;

  @TypeGraphQL.Field(_type => AnomalyWhereInput, {
    nullable: true
  })
  isNot?: AnomalyWhereInput | undefined;
}
