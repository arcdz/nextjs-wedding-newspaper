import {createTRPCRouter} from "y/server/api/trpc";
import {confirmationRouter} from "y/server/api/routers/confirmation";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    confirmation: confirmationRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
