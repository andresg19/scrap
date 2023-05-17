import React from 'react';

const Product = ({img, name, price, link}) => {
    return ( 
    <div className='grid w-[100%] h-auto bg-white shadow-sm rounded-sm relative  hover:shadow-md hover:shadow-[#19191939]'>
    <img src={img} alt="img not found" width={100} className="mx-auto"/>
    <h1 className='text-[10px] mx-auto w-[90%] text-center  text-[#191919df]'>{name}</h1>
    <h3>{price}</h3>
    </div> );
}
 
export default Product;