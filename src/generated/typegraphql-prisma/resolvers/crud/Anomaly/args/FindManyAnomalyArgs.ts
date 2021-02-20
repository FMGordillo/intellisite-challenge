import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnomalyOrderByInput } from "../../../inputs/AnomalyOrderByInput";
import { AnomalyWhereInput } from "../../../inputs/AnomalyWhereInput";
import { AnomalyWhereUniqueInput } from "../../../inputs/AnomalyWhereUniqueInput";
import { AnomalyScalarFieldEnum } from "../../../../enums/AnomalyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyAnomalyArgs {
  @TypeGraphQL.Field(_type => AnomalyWhereInput, {
    nullable: true
  })
  where?: AnomalyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AnomalyOrderByInput], {
    nullable: true
  })
  orderBy?: AnomalyOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => AnomalyWhereUniqueInput, {
    nullable: true
  })
  cursor?: AnomalyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [AnomalyScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"module_id" | "module" | "json_version" | "camera_uuid" | "timestamp"> | undefined;
}
