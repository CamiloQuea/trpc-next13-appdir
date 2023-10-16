import { z } from 'zod'

const myEnv = z.object({
    NODE_ENV: z
        .enum(['development', 'test', 'production'])
        .optional()
        .default('development'),
})

const env = myEnv.parse(process.env)

export { env }
