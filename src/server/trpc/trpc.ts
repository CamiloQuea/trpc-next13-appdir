import { initTRPC } from '@trpc/server'
import { NextRequest } from 'next/server';
import superjson from "superjson";
import { ZodError } from 'zod';

export const transformer = superjson;

interface CreateContextOptions {
    headers: Headers;
}

export const createInnerTRPCContext = (opts: CreateContextOptions) => {
    return {
        headers: opts.headers,
    };
};

export const createTRPCContext = (opts: { req: NextRequest }) => {
    return createInnerTRPCContext({
        headers: opts.req.headers,
    });
};

const t = initTRPC.context<typeof createTRPCContext>().create({
    transformer: superjson,
    errorFormatter({ shape, error }) {
        return {
            ...shape,
            data: {
                ...shape.data,
                zodError:
                    error.cause instanceof ZodError ? error.cause.flatten() : null,
            },
        };
    },
});

export const TRPCRouter = t.router;

export const publicProcedure = t.procedure;