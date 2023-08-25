import { env } from '@/env'
import { appRouter } from '@/server/trpc'
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'

const handler = (req: Request) => fetchRequestHandler({
    endpoint: `/api/trpc`,
    req,
    router: appRouter,
    createContext: () => ({}),
    onError:
        env.NODE_ENV === 'development'
            ? ({ path, error }) => {
                console.log(error)

                console.error(
                    `❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message
                    }`
                )
            }
            : undefined,
})

export { handler as GET, handler as POST }