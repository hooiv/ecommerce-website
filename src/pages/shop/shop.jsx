import React from 'react'
import { PRODUCTS } from '../../products';

export const Shop = () => {
  return (
    <div> className="shop"
     <div classname="shopTitle"><h1>Cam Setup</h1>
   </div>
   <div classname="products"> 
   {" "}
     {PRODUCTS.map((product)=> 
       <Product />
     ))}
     </div>
    </div>
  );
};
