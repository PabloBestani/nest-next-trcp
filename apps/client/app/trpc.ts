import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "@server/trpc/trpc.router";

export const trpc = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            // Cambiar esto por env variables
            url: `${process.env.NEXT_PUBLIC_NESTJS_SERVER}/trpc`,
        }),
    ],
});