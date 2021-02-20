import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnomalyWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  module_id?: string | undefined;
}
