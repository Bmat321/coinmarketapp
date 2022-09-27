import Head from "next/head";
import Image from "next/image";
import CmcTable from "../components/cmc-table/CmcTable.js";
import Header from "../components/Header.jsx";
import SwapCryptoModal from "../components/SwapCryptoModal";
import Trending from "../components/Trending";


export default function Home() {
  return (
    <div className="min-h-scree">
      <Header />
      <div className="p-12">
        <SwapCryptoModal />
        <div className="mt-2 " />
        <Trending />
        <div className="mt-20 " />
        <CmcTable />
      </div>
    </div>
  );
}
