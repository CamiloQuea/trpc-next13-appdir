import { appRouter } from "@/server/trpc";
import { httpBatchLink } from "@trpc/client";
import { getBaseUrl } from "./Provider";

export const serverClient = appRouter.createCaller({
    // links: [
    //     httpBatchLink({
    //         url: `${getBaseUrl()}/api/trpc`
    //     })
    // ]
})