import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
    tdmiaResults,
    ebayResults,
} from "../Redux/Actions/Actions";
import Swal from "sweetalert2";
const Search = ({setSection}) => {
    const dispatch = useDispatch();
    const [product, setProduct] = useState("");


    const handleClick = (e) => {
        e.preventDefault();
        dispatch(tdmiaResults(product));
        dispatch(ebayResults(product));
        setSection("default");

        let timerInterval
Swal.fire({
  title: 'Buscando productos',
  html:'luego seleccione la pestaña de su preferencia',
  timer: 13000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
    };

    return (
        <div className="flex w-[50%] bg-[#3136555b] items-center rounded-sm shadow-[#1919196b] shadow-sm justify-between mx-auto mt-5 ">
            <input 
            className="w-[80%] bg-[#dbe7e9] rounded-sm focus:outline-none placeholder:opacity-0 focus:placeholder:opacity-80"
                type="text"
                onChange={(e) => {
                    setProduct(e.target.value);
                }}
                placeholder="Ingrese el producto que busca..."
            />
            <button className="w-[20%]  rounded-sm text-sm shadow-sm" type="submit"  onClick={handleClick}>
                Buscar
            </button>
        </div>
    );
};

export default Search;
