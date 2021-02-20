import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnomalyWhereInput } from "../inputs/AnomalyWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnomalyListRelationFilter {
  @TypeGraphQL.Field(_type => AnomalyWhereInput, {
    nullable: true
  })
  every?: AnomalyWhereInput | undefined;

  @TypeGraphQL.Field(_type => AnomalyWhereInput, {
    nullable: true
  })
  some?: AnomalyWhereInput | undefined;

  @TypeGraphQL.Field(_type => AnomalyWhereInput, {
    nullable: true
  })
  none?: AnomalyWhereInput | undefined;
}
