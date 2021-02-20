import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Camera } from "../models/Camera";
import { Event } from "../models/Event";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Anomaly {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  module_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  module!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  json_version!: string;

  events?: Event[];

  camera?: Camera;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  camera_uuid!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  timestamp!: Date;
}
