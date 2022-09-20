import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header.jsx";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mt-10" />
      <div className="mt-20" />
    </div>
  );
}
