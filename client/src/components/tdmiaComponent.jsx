import React, { useState } from 'react';
import { tdmiaResults } from '../Redux/Actions/Actions';
import { useDispatch, useSelector } from 'react-redux';

const TmiaComponent = () => {
   
        const dispatch = useDispatch();
        const results = useSelector((state) => state.tdmiaResults);
        console.log(results)
        const [product, setProduct] = useState("");
        console.log(product);
      
        const handleClick = (e) => {
          e.preventDefault();
          dispatch(tdmiaResults(product));
        }

        return (
          <>
            <h1>TDMIA</h1>
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
}
 
export default TmiaComponent;