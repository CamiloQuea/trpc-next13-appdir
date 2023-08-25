import { publicProcedure, router } from './trpc'

export const appRouter = router({
    getTodos: publicProcedure.query(async () => {
        return [1, 2, 3]
    })
})

export type AppRouter = typeof appRouter;