import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CameraWhereInput } from "../inputs/CameraWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CameraRelationFilter {
  @TypeGraphQL.Field(_type => CameraWhereInput, {
    nullable: true
  })
  is?: CameraWhereInput | undefined;

  @TypeGraphQL.Field(_type => CameraWhereInput, {
    nullable: true
  })
  isNot?: CameraWhereInput | undefined;
}
