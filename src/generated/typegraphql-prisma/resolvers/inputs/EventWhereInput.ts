import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnomalyRelationFilter } from "../inputs/AnomalyRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { JsonFilter } from "../inputs/JsonFilter";
import { JsonNullableListFilter } from "../inputs/JsonNullableListFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EventWhereInput {
  @TypeGraphQL.Field(_type => [EventWhereInput], {
    nullable: true
  })
  AND?: EventWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventWhereInput], {
    nullable: true
  })
  OR?: EventWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventWhereInput], {
    nullable: true
  })
  NOT?: EventWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  uuid?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => JsonNullableListFilter, {
    nullable: true
  })
  images?: JsonNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => JsonNullableListFilter, {
    nullable: true
  })
  attributes?: JsonNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => JsonNullableListFilter, {
    nullable: true
  })
  alerts?: JsonNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => JsonFilter, {
    nullable: true
  })
  trajectory?: JsonFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  instance?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => AnomalyRelationFilter, {
    nullable: true
  })
  anomaly?: AnomalyRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  anomaly_id?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  module_version?: StringNullableFilter | undefined;
}
