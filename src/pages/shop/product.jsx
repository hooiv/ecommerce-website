import React from "react";
import { ShopContext } from "../../context/shop-context"; 
export const Product=(props) => {
    const {id,productName,price,productImage}=props.data;



    return ( <div className="product">
        <img src={productImage}/>
        <div className="description">
            <p>
                 <b>{productImage}</b>
                 </p>
                 <p>${price}</p>
                 </div>
                 <button className="addToCartBtton">Add to Cart</button>
                 </div>
                 );
};