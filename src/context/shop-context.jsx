import React from "react";
import { PRODUCTS } from "../products";

export const ShopContext=createContext(null);
const getDefautCart=()=>{
    let cart={}
    for (let i=1;i<PRODUCTS.length+1;i++){
        cart[i]=0;
    }
    return cart;
}
export const ShopContextProvider=(props)=>{
    const [cartItems,setCartItems]=useState(getDefautCart());
const addToCart=(itemId)=>
    set cartItems((prev)=>({...pr ev, [itemId]:prev[itemId]+1}))
    return <ShopContettttttttttttttttttttttttttttttttttxt.ShopContextProvider>{props.children}</ShopContext.ShopContextProvider>
};