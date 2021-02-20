import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnomalyListRelationFilter } from "../inputs/AnomalyListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CameraWhereInput {
  @TypeGraphQL.Field(_type => [CameraWhereInput], {
    nullable: true
  })
  AND?: CameraWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CameraWhereInput], {
    nullable: true
  })
  OR?: CameraWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CameraWhereInput], {
    nullable: true
  })
  NOT?: CameraWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  uuid?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => AnomalyListRelationFilter, {
    nullable: true
  })
  anomalies?: AnomalyListRelationFilter | undefined;
}
