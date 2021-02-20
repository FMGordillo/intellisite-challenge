import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AnomalyMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  module_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  module!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  module_version!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  json_version!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  camera_uuid!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  timestamp!: Date | null;
}
