import React, { useState } from "react";
import TmiaComponent from "./tdmiaComponent";
import EbayComponent from "./ebayComponent";
import Search from "./Search";
import { useDispatch } from "react-redux";
import { clearState } from "../Redux/Actions/Actions";

const Home = () => {
  const dispatch = useDispatch();
  const [section, setSection] = useState("");

  const handleClear = (e) => {
    e.preventDefault();
    setSection("");
    dispatch(clearState());
    
  }

  return (
    <>
      <header>
        <Search setSection={setSection} />
      </header>
      <main>
       {
        section === "default" || section === "ebay" || section === "tdmia" ?
        (  <section className="grid mt-[2%] bg-[#5552a551] w-[90%] mx-auto h-[70vh]  rounded-sm shadow-sm shadow-[#1919197a]">
            <div className="flex px-0.5 w-[40%] h-[5%] space-x-0.2 mt-0.5">
                <button className="bg-[#4749742f] w-[100%] shadow-sm shadow-[#2626266c] focus:bg-[#4749748d] h-4 text-xs text-center rounded-tr-md" onClick={(e) => setSection("ebay")}>ebay results</button>
                <button className="bg-[#4749742f] w-[100%] shadow-sm shadow-[#2626266c] focus:bg-[#4749748d] h-4 text-xs text-center rounded-tr-md" onClick={(e) => setSection("tdmia")}> tienda mia results</button>
                <button  className="bg-[#4749742f] w-[100%] shadow-sm shadow-[#2626266c] focus:bg-[#4749748d] h-4 text-xs text-center rounded-tr-md" onClick={(e) => handleClear(e)}>reset</button>
            </div>
            
            { section === "tdmia" ? (
          <section className="grid mt-5 w-[90%] mx-auto max-h-[70vh] overflow-visible overflow-y-auto rounded-sm ">
          <TmiaComponent />
          </section>
        ) : section === "ebay" ? (
          <section className="grid mt-5 w-[90%] mx-auto max-h-[70vh] overflow-visible overflow-y-auto rounded-sm ">
            <EbayComponent />
          </section>
        ) : null }

            
        </section>) : null
       }
       
      </main>
    </>
  );
};

export default Home;
