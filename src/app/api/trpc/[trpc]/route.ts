import { env } from '@/env'
import { appRouter } from '@/server/trpc/root'
import { createTRPCContext } from '@/server/trpc/trpc'
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { NextRequest } from 'next/server'

const handler = (req: NextRequest) => fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => createTRPCContext({ req }),
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