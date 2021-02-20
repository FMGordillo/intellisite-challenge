import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class EventMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  uuid!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  instance!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  anomaly_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  module_version!: string | null;
}
