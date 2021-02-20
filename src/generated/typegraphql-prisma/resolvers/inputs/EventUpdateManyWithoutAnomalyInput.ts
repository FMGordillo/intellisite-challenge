import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateOrConnectWithoutAnomalyInput } from "../inputs/EventCreateOrConnectWithoutAnomalyInput";
import { EventCreateWithoutAnomalyInput } from "../inputs/EventCreateWithoutAnomalyInput";
import { EventScalarWhereInput } from "../inputs/EventScalarWhereInput";
import { EventUpdateManyWithWhereWithoutAnomalyInput } from "../inputs/EventUpdateManyWithWhereWithoutAnomalyInput";
import { EventUpdateWithWhereUniqueWithoutAnomalyInput } from "../inputs/EventUpdateWithWhereUniqueWithoutAnomalyInput";
import { EventUpsertWithWhereUniqueWithoutAnomalyInput } from "../inputs/EventUpsertWithWhereUniqueWithoutAnomalyInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EventUpdateManyWithoutAnomalyInput {
  @TypeGraphQL.Field(_type => [EventCreateWithoutAnomalyInput], {
    nullable: true
  })
  create?: EventCreateWithoutAnomalyInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventCreateOrConnectWithoutAnomalyInput], {
    nullable: true
  })
  connectOrCreate?: EventCreateOrConnectWithoutAnomalyInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventUpsertWithWhereUniqueWithoutAnomalyInput], {
    nullable: true
  })
  upsert?: EventUpsertWithWhereUniqueWithoutAnomalyInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventWhereUniqueInput], {
    nullable: true
  })
  connect?: EventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventWhereUniqueInput], {
    nullable: true
  })
  set?: EventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventWhereUniqueInput], {
    nullable: true
  })
  disconnect?: EventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventWhereUniqueInput], {
    nullable: true
  })
  delete?: EventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventUpdateWithWhereUniqueWithoutAnomalyInput], {
    nullable: true
  })
  update?: EventUpdateWithWhereUniqueWithoutAnomalyInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventUpdateManyWithWhereWithoutAnomalyInput], {
    nullable: true
  })
  updateMany?: EventUpdateManyWithWhereWithoutAnomalyInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EventScalarWhereInput[] | undefined;
}
