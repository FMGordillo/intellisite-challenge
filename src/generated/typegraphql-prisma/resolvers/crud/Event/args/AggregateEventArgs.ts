import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EventOrderByInput } from "../../../inputs/EventOrderByInput";
import { EventWhereInput } from "../../../inputs/EventWhereInput";
import { EventWhereUniqueInput } from "../../../inputs/EventWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateEventArgs {
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
}
