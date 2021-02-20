import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnomalyCreateOrConnectWithoutEventsInput } from "../inputs/AnomalyCreateOrConnectWithoutEventsInput";
import { AnomalyCreateWithoutEventsInput } from "../inputs/AnomalyCreateWithoutEventsInput";
import { AnomalyUpdateWithoutEventsInput } from "../inputs/AnomalyUpdateWithoutEventsInput";
import { AnomalyUpsertWithoutEventsInput } from "../inputs/AnomalyUpsertWithoutEventsInput";
import { AnomalyWhereUniqueInput } from "../inputs/AnomalyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnomalyUpdateOneWithoutEventsInput {
  @TypeGraphQL.Field(_type => AnomalyCreateWithoutEventsInput, {
    nullable: true
  })
  create?: AnomalyCreateWithoutEventsInput | undefined;

  @TypeGraphQL.Field(_type => AnomalyCreateOrConnectWithoutEventsInput, {
    nullable: true
  })
  connectOrCreate?: AnomalyCreateOrConnectWithoutEventsInput | undefined;

  @TypeGraphQL.Field(_type => AnomalyUpsertWithoutEventsInput, {
    nullable: true
  })
  upsert?: AnomalyUpsertWithoutEventsInput | undefined;

  @TypeGraphQL.Field(_type => AnomalyWhereUniqueInput, {
    nullable: true
  })
  connect?: AnomalyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => AnomalyUpdateWithoutEventsInput, {
    nullable: true
  })
  update?: AnomalyUpdateWithoutEventsInput | undefined;
}
