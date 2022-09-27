import Head from "next/head";
import Image from "next/image";
import CmcTable from "../components/cmc-table/CmcTable.js";
import Header from "../components/Header.jsx";
import SwapCryptoModal from "../components/SwapCryptoModal";
import Trending from "../components/Trending";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="min-h-screen justify-between flex-col ">
      <Header />
      <SwapCryptoModal />
      <div className="mt-10 " />
      <Trending />
      <div className="mt-20 " />
      <CmcTable />
    </div>
  );
}
