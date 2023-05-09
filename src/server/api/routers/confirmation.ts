import {z} from "zod";

import {createTRPCRouter, publicProcedure} from "y/server/api/trpc";

export const confirmationRouter = createTRPCRouter({
    confirm: publicProcedure
        .input(z.object({
            name: z.string().min(1).max(200),
            number: z.string().max(200).optional(),
            specs: z.string().max(1000).optional(),
            yes: z.boolean(),
        }))
        .mutation(async ({ctx, input}) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return
            return await ctx.prisma.confirmation.create({
                data: {
                    yes: input.yes,
                    name: input.name,
                    number: !!input.number ? input.number : '-',
                    specs: !!input.specs ? input.specs : '-'}
            });
        })
});
