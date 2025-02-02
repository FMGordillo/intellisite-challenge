import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnomalyCreateeventsInput } from "../inputs/AnomalyCreateeventsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnomalyCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  module_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  module!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  module_version?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  json_version?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  camera_uuid?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  timestamp!: Date;

  @TypeGraphQL.Field(_type => AnomalyCreateeventsInput, {
    nullable: true
  })
  events?: AnomalyCreateeventsInput | undefined;
}
