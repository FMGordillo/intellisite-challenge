import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnomalyScalarWhereInput } from "../inputs/AnomalyScalarWhereInput";
import { AnomalyUpdateManyMutationInput } from "../inputs/AnomalyUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnomalyUpdateManyWithWhereWithoutCameraInput {
  @TypeGraphQL.Field(_type => AnomalyScalarWhereInput, {
    nullable: false
  })
  where!: AnomalyScalarWhereInput;

  @TypeGraphQL.Field(_type => AnomalyUpdateManyMutationInput, {
    nullable: false
  })
  data!: AnomalyUpdateManyMutationInput;
}
