import { publicProcedure, TRPCRouter } from './trpc'

export const appRouter = TRPCRouter({
    getTodos: publicProcedure.query(async () => {
        return [1, 2, 3]
    })
})

export type AppRouter = typeof appRouter;