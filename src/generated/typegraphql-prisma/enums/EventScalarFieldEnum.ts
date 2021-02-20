import * as TypeGraphQL from "type-graphql";

export enum EventScalarFieldEnum {
  id = "id",
  uuid = "uuid",
  images = "images",
  attributes = "attributes",
  alerts = "alerts",
  trajectory = "trajectory",
  instance = "instance",
  anomaly_id = "anomaly_id",
  module_version = "module_version"
}
TypeGraphQL.registerEnumType(EventScalarFieldEnum, {
  name: "EventScalarFieldEnum",
  description: undefined,
});
