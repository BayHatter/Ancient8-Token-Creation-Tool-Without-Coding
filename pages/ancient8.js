import dynamic from 'next/dynamic';
import WalletProvider from '../assets/WalletProvider';
import TopMenu from '../assets/TopMenu';
import Ancient8Asset from '../assets/Ancient8Asset';
import Sidebar from '../assets/Sidebar';
import Head from 'next/head';

const Ancient8AssetWithNoSSR = dynamic(() => import('../assets/Ancient8Asset'), {
  ssr: false,
});

export default function Ancient8() {
  return (
    <div className="min-h-screen bg-white-100">
      <WalletProvider>
        {({ provider, account, connectWallet, disconnectWallet }) => (
          <>
            <TopMenu account={account} connectWallet={connectWallet} disconnectWallet={disconnectWallet} />
            
            <Head>
              <title>Ancient8 Token Creation Tool</title>
              <meta name="description" content="Create and launch your own meme token on Ancient8" />
              <meta property="og:title" content="Launch Your Meme Coin on Ancient8" />
              <meta property="og:description" content="Build and deploy a meme coin instantly on Ancient8. Fast, secure, and 100% code-free." />
              <meta property="og:type" content="website" />
              <meta property="og:url" content="/ancient8" />
            </Head>

            <div className="container mx-auto p-4 max-w-7xl flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Ancient8AssetWithNoSSR provider={provider} account={account} connectWallet={connectWallet} />
              </div>
              <div className="md:w-[300px] flex-shrink-0">
                <Sidebar />
              </div>
            </div>
          </>
        )}
      </WalletProvider>
    </div>
  );
}
