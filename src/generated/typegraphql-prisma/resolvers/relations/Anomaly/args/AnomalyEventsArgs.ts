import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EventOrderByInput } from "../../../inputs/EventOrderByInput";
import { EventWhereInput } from "../../../inputs/EventWhereInput";
import { EventWhereUniqueInput } from "../../../inputs/EventWhereUniqueInput";
import { EventScalarFieldEnum } from "../../../../enums/EventScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class AnomalyEventsArgs {
  @TypeGraphQL.Field(_type => EventWhereInput, {
    nullable: true
  })
  where?: EventWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EventOrderByInput], {
    nullable: true
  })
  orderBy?: EventOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => EventWhereUniqueInput, {
    nullable: true
  })
  cursor?: EventWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [EventScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "uuid" | "images" | "attributes" | "alerts" | "trajectory" | "instance" | "anomaly_id" | "module_version"> | undefined;
}
