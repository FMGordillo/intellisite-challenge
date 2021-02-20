import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnomalyOrderByInput } from "../../../inputs/AnomalyOrderByInput";
import { AnomalyWhereInput } from "../../../inputs/AnomalyWhereInput";
import { AnomalyWhereUniqueInput } from "../../../inputs/AnomalyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateAnomalyArgs {
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
}
