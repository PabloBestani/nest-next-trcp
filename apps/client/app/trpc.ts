import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "@server/trpc/trpc.router";

export const trpc = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            // Cambiar esto por env variables
            url: "http://localhost:4000/trpc",
        }),
    ],
});