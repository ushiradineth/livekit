import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const router = useRouter();
  return (
    <QueryClientProvider client={queryClient}>
      <>
        {router.pathname !== "/" && (
          <Link href="/" className="font-bold rounded-lg bg-white text-black border py-2 px-4 absolute top-8 left-8">
            Home
          </Link>
        )}
        <Component {...pageProps} />
      </>
    </QueryClientProvider>
  );
}
