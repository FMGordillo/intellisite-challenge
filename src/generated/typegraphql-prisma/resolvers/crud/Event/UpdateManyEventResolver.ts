import * as TypeGraphQL from "type-graphql";
import { UpdateManyEventArgs } from "./args/UpdateManyEventArgs";
import { Event } from "../../../models/Event";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => Event)
export class UpdateManyEventResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyEventArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.event.updateMany(args);
  }
}
