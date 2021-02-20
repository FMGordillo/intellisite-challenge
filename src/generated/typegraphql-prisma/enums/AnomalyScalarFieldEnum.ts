import * as TypeGraphQL from "type-graphql";

export enum AnomalyScalarFieldEnum {
  id = "id",
  module_id = "module_id",
  module = "module",
  module_version = "module_version",
  json_version = "json_version",
  events = "events",
  camera_uuid = "camera_uuid",
  timestamp = "timestamp"
}
TypeGraphQL.registerEnumType(AnomalyScalarFieldEnum, {
  name: "AnomalyScalarFieldEnum",
  description: undefined,
});
