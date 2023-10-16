import { z } from 'zod'
import dotenv from 'dotenv'
dotenv.config()

const myEnv = z.object({
    NODE_ENV: z
        .enum(['development', 'test', 'production'])
        .optional()
        .default('development'),

})

const env = myEnv.parse(process.env)

export { env }
