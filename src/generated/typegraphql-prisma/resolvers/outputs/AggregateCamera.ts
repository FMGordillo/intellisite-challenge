import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CameraCountAggregate } from "../outputs/CameraCountAggregate";
import { CameraMaxAggregate } from "../outputs/CameraMaxAggregate";
import { CameraMinAggregate } from "../outputs/CameraMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateCamera {
  @TypeGraphQL.Field(_type => CameraCountAggregate, {
    nullable: true
  })
  count!: CameraCountAggregate | null;

  @TypeGraphQL.Field(_type => CameraMinAggregate, {
    nullable: true
  })
  min!: CameraMinAggregate | null;

  @TypeGraphQL.Field(_type => CameraMaxAggregate, {
    nullable: true
  })
  max!: CameraMaxAggregate | null;
}
