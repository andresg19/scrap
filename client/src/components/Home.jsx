import React from "react";
import TmiaComponent from "./tdmiaComponent";
import EbayComponent from "./ebayComponent";
import Search from "./Search";

const Home = () => {
  return (
    <>
      <header>
        <Search />
      </header>
      <main>
        <section className="grid mt-[5%] w-[90%] mx-auto max-h-auto">
          <TmiaComponent />
        </section>
        <section className="grid mt-[5%] w-[90%] mx-auto max-h-auto">
          <EbayComponent />
        </section>
      </main>
    </>
  );
};

export default Home;
