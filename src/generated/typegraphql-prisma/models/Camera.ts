import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Anomaly } from "../models/Anomaly";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Camera {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  uuid!: string;

  anomalies?: Anomaly[];
}
