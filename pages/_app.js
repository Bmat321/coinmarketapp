import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { MoralisProvider } from "react-moralis";
import { CoinMarketProvider } from "../context/context";
import { GunProvider } from "../context/gunContext";

function MyApp({ Component, pageProps }) {
  console.log(process.env.NEXT_PUBLIC_SERVER);
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_SERVER}
      appId={process.env.NEXT_PUBLIC_APP_ID}
    >
      <GunProvider>
        <CoinMarketProvider>
          <Component {...pageProps} />
        </CoinMarketProvider>
      </GunProvider>
    </MoralisProvider>
  );
}

export default MyApp;
