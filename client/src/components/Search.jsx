import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
    tdmiaResults,
    ebayResults,
} from "../Redux/Actions/Actions";

const Search = () => {
    const dispatch = useDispatch();
    const [product, setProduct] = useState("");


    

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(tdmiaResults(product));
        dispatch(ebayResults(product));
    };

    return (
        <>
            <input
                type="text"
                onChange={(e) => {
                    setProduct(e.target.value);
                }}
                placeholder="Ingrese el producto que busca..."
            />
            <button  type="submit" onClick={handleClick}>
                Buscar
            </button>
        </>
    );
};

export default Search;
