import Image from "next/image";
import React from "react";
import Search from "../assets/svg/search";

const styles = {
  header: `bg-[#17171A] text-white flex h-20 gap-[100px] w-full p-[30px]`,
  headerWrapper: `flex justify-content mx-auto px-4 h-full max-w-screen-xl`,
  nav: `flex justify-content items-center gap-[20px]`,
  navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
  badge: `w-1 h-1 rounded-full bg-blue-600 absolute botton-5 right-0 ring-4 top-1`,
  inputContainer: `flex items-center justify-center p-2 rounder bg-[#171924]`,
  input: `ml-3 bg-transparent outline-none text-white w-70`,
};

const Header = () => {
  return (
    <div class={styles.header}>
      <Image
        src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg"
        alt="logo"
        width={220}
        height={220}
      />
      <div className={styles.headerWrapper}>
        <nav className={styles.nav}>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Cryptocurrencies</div>
            <div className={styles.badge} />
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Exchanges</div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>NFT</div>
            <div className={styles.badge} />
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Cryptown</div>
            <div className={styles.badge} />
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Portfolio</div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Watchlist</div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Products</div>
            <div className={styles.badge} />
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Learn</div>
          </div>
        </nav>

        <div className="flex items-center">
          <div className={styles.inputContainer}>
            <Search />
            <input placeholder="Search" className={styles.input} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
