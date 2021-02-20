import * as TypeGraphQL from "type-graphql";
import { DeleteManyEventArgs } from "./args/DeleteManyEventArgs";
import { Event } from "../../../models/Event";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => Event)
export class DeleteManyEventResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyEventArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.event.deleteMany(args);
  }
}
