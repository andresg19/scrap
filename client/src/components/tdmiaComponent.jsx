import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";

const TmiaComponent = () => {
  const results = useSelector((state) => state.tdmiaResults);
  console.log(results);

  return (
    <div className="grid grid-cols-2 gap-3 w-[100%] justify-between mx-auto lg:grid-cols-5 lg:w-[80%]">
      {results.length
        ? results.map((r) => (
            <div key={r.link}>
              <Product
                img={r.img}
                name={r.product}
                price={r.price}
                link={r.link}
              />
            </div>
          ))
        : null}
    </div>
  );
};

export default TmiaComponent;
