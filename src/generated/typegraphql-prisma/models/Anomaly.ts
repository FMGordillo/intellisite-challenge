import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Anomaly {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

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
  module_version?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  json_version!: string;

  @TypeGraphQL.Field(_type => [GraphQLScalars.JSONResolver], {
    nullable: false
  })
  events!: Prisma.JsonValue[];

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  camera_uuid!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  timestamp!: Date;
}
