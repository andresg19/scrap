import React, { useState } from 'react';
import { ebayResults } from '../Redux/Actions/Actions';
import { useDispatch, useSelector } from 'react-redux';

const EbayComponent = () => {
   
        const dispatch = useDispatch();
        const results = useSelector((state) => state.ebayResults);
        console.log(results)
        const [product, setProduct] = useState("");
        console.log(product);
      
        const handleClick = (e) => {
          e.preventDefault();
          dispatch(ebayResults(product));
        }

        return (
          <>
            <h1>EBAY</h1>
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
 
export default EbayComponent;