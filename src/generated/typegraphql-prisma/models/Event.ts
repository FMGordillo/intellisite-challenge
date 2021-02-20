import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Anomaly } from "../models/Anomaly";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Event {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  uuid!: string;

  @TypeGraphQL.Field(_type => [GraphQLScalars.JSONResolver], {
    nullable: false
  })
  images!: Prisma.JsonValue[];

  @TypeGraphQL.Field(_type => [GraphQLScalars.JSONResolver], {
    nullable: false
  })
  attributes!: Prisma.JsonValue[];

  @TypeGraphQL.Field(_type => [GraphQLScalars.JSONResolver], {
    nullable: false
  })
  alerts!: Prisma.JsonValue[];

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  trajectory!: Prisma.JsonValue;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  instance!: string;

  anomaly?: Anomaly | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  anomaly_id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  module_version?: string | null;
}
