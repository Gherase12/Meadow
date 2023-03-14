import { createClient, configureChains,  WagmiConfig } from "wagmi";
import Head from "next/head";
import { useRouter } from "next/router";
import { publicProvider } from "wagmi/providers/public";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@suiet/wallet-kit/style.css";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { WalletProvider } from "@suiet/wallet-kit";
import Nav from "./../components/Nav/Nav";
import { ThemeProvider } from "../context/themeContext";
import { avalanche, bsc, mainnet } from '@wagmi/core/chains'



const queryClient = new QueryClient();
const { provider, webSocketProvider } = configureChains(
  [bsc],
  [publicProvider()]
);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

export default function App({ Component, pageProps }) {
  

  return (
    <ThemeProvider>
      <WagmiConfig client={client}>
        <SessionProvider session={pageProps.session} refetchInterval={0}>
          <WalletProvider>
            <QueryClientProvider client={queryClient}>
              <div className='h-screen w-full pt-[70px] xl:pt-0 bg-white-1 dark:bg-blue-2 flex items-center relative overflow-x-hidden  '>
                <ToastContainer autoClose={1000} />
                <Head>
                  <title>MEADOW</title>
                  <meta name='description' content='' />
                  <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                  />
                  <link rel='icon' href='/logo-card.svg' />
                </Head>
                <div className='lg:h-[947.31px]   3xl:px-[40px] md:p-[11px] w-full flex md:max-w-[1450px]  3xl:max-w-[2050px] justify-start pr-0 overflow-hidden xl:space-x-[62px] 3xl:space-x-[30px] mx-auto   my-auto '>
                  <Nav  />
                  <Component {...pageProps} />
                  {/* <Timeout /> */}
                  <Analytics />
                </div>
              </div>
            </QueryClientProvider>
          </WalletProvider>
        </SessionProvider>
      </WagmiConfig>
    </ThemeProvider>
  );
}
