import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnomalyScalarWhereInput {
  @TypeGraphQL.Field(_type => [AnomalyScalarWhereInput], {
    nullable: true
  })
  AND?: AnomalyScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnomalyScalarWhereInput], {
    nullable: true
  })
  OR?: AnomalyScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnomalyScalarWhereInput], {
    nullable: true
  })
  NOT?: AnomalyScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  module_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  module?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  json_version?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  camera_uuid?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  timestamp?: DateTimeFilter | undefined;
}
