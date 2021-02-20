import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CameraRelationFilter } from "../inputs/CameraRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EventListRelationFilter } from "../inputs/EventListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnomalyWhereInput {
  @TypeGraphQL.Field(_type => [AnomalyWhereInput], {
    nullable: true
  })
  AND?: AnomalyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnomalyWhereInput], {
    nullable: true
  })
  OR?: AnomalyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnomalyWhereInput], {
    nullable: true
  })
  NOT?: AnomalyWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => EventListRelationFilter, {
    nullable: true
  })
  events?: EventListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CameraRelationFilter, {
    nullable: true
  })
  camera?: CameraRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  camera_uuid?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  timestamp?: DateTimeFilter | undefined;
}
