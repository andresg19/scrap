import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { meliResults } from "../Redux/Actions/Actions";

const MeliComponent = () => {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.meliResults);
  console.log(results)
  const [product, setProduct] = useState("");
  console.log(product);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(meliResults(product));
  }
  return (
    <>
      <h1>MELI</h1>
      <form action="submit" onSubmit={handleClick}>
        <input
          type="text"
          onChange={(e) => {
            setProduct(e.target.value);
          }}
          placeholder="Ingrese el producto que busca..."
        />
        <button type="submit">Buscar</button>
      </form>
    </>
  );
};

export default MeliComponent;
