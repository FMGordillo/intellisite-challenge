import * as TypeGraphQL from "type-graphql";

export enum AnomalyScalarFieldEnum {
  module_id = "module_id",
  module = "module",
  json_version = "json_version",
  camera_uuid = "camera_uuid",
  timestamp = "timestamp"
}
TypeGraphQL.registerEnumType(AnomalyScalarFieldEnum, {
  name: "AnomalyScalarFieldEnum",
  description: undefined,
});
