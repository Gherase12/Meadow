import { createClient, configureChains, goerli, WagmiConfig } from 'wagmi';
import Head from "next/head";
import "../styles/globals.css";
import Nav from "./../components/Nav";
import { useRouter } from "next/router";
import { EthosConnectProvider } from "ethos-connect";
import { publicProvider } from 'wagmi/providers/public';
import { SessionProvider } from 'next-auth/react';

const { provider, webSocketProvider } = configureChains([goerli], [publicProvider()]);
const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const currentPagePath = router.pathname;

  return (
    <WagmiConfig client={client}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
    <EthosConnectProvider
      ethosConfiguration={{
        hideEmailSignIn: true, // defaults to false
      }}
    >
      <div className='h-screen w-full pt-[70px] md:pt-0 bg-white-1 flex items-center relative overflow-x-hidden  '>
        <Head>
          <title>MEADOW</title>
          <meta name='description' content='Generated by create next app' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/logo-card.svg' />
        </Head>
        <div className='lg:h-[947.31px]    md:p-[11px] w-full flex md:max-w-[1450px]  pr-0 overflow-hidden md:space-x-[62px] mx-auto my-auto '>
          <Nav path={currentPagePath} />

          <Component {...pageProps} />
        </div>
      </div>
    </EthosConnectProvider>
    </SessionProvider>
    </WagmiConfig>
  );
}
