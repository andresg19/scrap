import React from 'react';
import { Link } from "react-router-dom";

const Product = ({img, name, price, link}) => {

    const navigateToProduct = (e) => {
        e.preventDefault()
        navigate(`/${link}`);
    }
    return ( 
    <div className='grid w-[100%] h-[40vh] bg-white shadow-sm rounded-sm relative hover:shadow-md hover:shadow-[#19191939]'>
    <Link to={link}>
    <img src={img} alt="img not found" width={100} className="mx-auto"/>
    <p className='text-[8px] mx-auto text-center w-[100%]   text-[#191919df]'>{name}</p>
    <h3 className='text-[10px] text-center text-[#39b141b3] font-black'>{price}</h3>
    </Link>
    </div> );
}
 
export default Product;