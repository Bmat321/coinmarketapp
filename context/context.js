import Moralis from "moralis";
import { createContext, useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import { useMoralisQuery } from "react-moralis";
import {
  dogeAbi,
  linkAbi,
  daiAbi,
  actionCoinAbi,
  ngCoinAbi,
  usdcAbi,
  dogeCoinAddress,
  linkAddress,
  daiAddress,
  ngCoinAddress,
  usdcAddress,
  actionCoinAddress,
} from "../lib/constants";

export const CoinMarketContext = createContext();

export const CoinMarketProvider = ({ children }) => {
  const {
    data: coins,
    error,
    isLoading: loadingCoins,
  } = useMoralisQuery("Coins");

  const { isAuthenticated, user, Moralis } = useMoralis();

  const [currentAccount, setCurrentAccount] = useState("");
  const [openBuyCryptoModal, setOpenBuyCryptoModal] = useState(false);
  const [fromToken, setFromToken] = useState("");
  const [toToken, setToToken] = useState("Dai");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      const account = user.get("ethAddress");
      setCurrentAccount(account);
    }
  }, [isAuthenticated, user]);

  const getContractAddress = () => {
    if (fromToken === "Dai") return daiAddress;
    if (fromToken === "Link") return linkAddress;
    if (fromToken === "Dogecoin") return dogeCoinAddress;
    if (fromToken === "ActionCoin") return actionCoinAddress;
    if (fromToken === "NgCoin") return ngCoinAddress;
    if (fromToken === "Usdc") return usdcAddress;
  };

  const getToAddress = () => {
    if (toToken === "Dai") return daiAddress;
    if (toToken === "Link") return linkAddress;
    if (toToken === "Dogecoin") return dogeCoinAddress;
    if (toToken === "ActionCoin") return actionCoinAddress;
    if (toToken === "NgCoin") return ngCoinAddress;
    if (toToken === "Usdc") return usdcAddress;
  };

  const getToAbi = () => {
    if (toToken === "Dai") return daiAbi;
    if (toToken === "Link") return linkAbi;
    if (toToken === "Dogecoin") return dogeAbi;
    if (toToken === "ActionCoin") return actionCoinAbi;
    if (toToken === "NgCoin") return ngCoinAbi;
    if (toToken === "Usdc") return usdcAbi;
  };

  const mint = async () => {
    try {
      if (fromToken === "ETH") {
        if (!isAuthenticated) return;
        await Moralis.enableWeb3();
        const contractAddress = getContractAddress();
        const contractAbi = getToAbi();

        let options = {
          contractAddress: contractAddress,
          functionName: "mint",
          abi: contractAbi,
          params: {
            to: currentAccount,
            amount: Moralis.Units.Token(amount),
          },
        };
        const transaction0 = await Moralis.executeFunction(options);
        const receipt = await transaction0.await(4);
        console.log(receipt);
        await sendEth();
      } else {
        await swapToken();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const swapToken = async () => {
    try {
      if (!isAuthenticated) return;
      await Moralis.enableWeb3();

      if (fromToken === toToken) return alert("You cannot sawp the same token");

      const fromOptions = {
        type: "erc20",
        amount: Moralis.Units.Token(amount, "18"),
        receiver: getContractAddress(),
        contractAddress: getContractAddress(),
      };

      const toMintOptions = {
        contractAddress: getToAddress(),
        functionName: "mint",
        abi: getToAbi(),
        params: {
          to: currentAccount,
          amount: Moralis.Units.Token(amount, "18"),
        },
      };
      let fromTransaction = await Moralis.transfer(fromOptions);
      let toMintTransaction = await Moralis.executeFunction(toMintOptions);
      let fromReceipt = await fromTransaction.await();
      let toReceipt = await toMintTransaction.await();
      console.log(fromReceipt);
      console.log(toReceipt);
    } catch (err) {
      console.log(err);
    }
  };

  const sendEth = async () => {
    try {
      if (!isAuthenticated) return;
      const contractAddress = getToAddress();
      let options = {
        type: "native",
        amount: Moralis.Units.ETH("0.01"),
        receiver: contractAddress,
      };
      const transaction = await Moralis.transfer(options);
      const receipt = await transaction.wait();
      console.log(receipt);
    } catch (err) {
      console.log(err);
    }
  };
  // const sendEth = async () => {
  //   if (!isAuthenticated) return;
  //   const contractAddress = getToAddress();

  //   let options = {
  //     type: "native",
  //     amount: Moralis.Units.ETH("0.01"),
  //     receiver: contractAddress,
  //   }
  //   const transaction = await Moralis.transfer(options);
  //   const receipt = await transaction.await();
  //   console.log(receipt);
  // };

  const getTopTenCoins = async () => {
    try {
      const res = await fetch("/api/getTopTen/");
      const data = await res.json();
      return data.data.data;
    } catch (e) {
      console.log(e.message);
    }
  };

  const openModal = () => {
    setOpenBuyCryptoModal(true);
  };

  return (
    <CoinMarketContext.Provider
      value={{
        getTopTenCoins,
        fromToken,
        toToken,
        openBuyCryptoModal,
        setOpenBuyCryptoModal,
        openModal,
        mint,
        setAmount,
        amount,
        setFromToken,
        setToToken,
        coins,
        loadingCoins,
      }}
    >
      {children}
    </CoinMarketContext.Provider>
  );
};
