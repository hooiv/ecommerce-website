import {createContext,useEffect,useState} from "react";
import { PRODUCTS } from "../products";

export const ShopContext=createContext(null);
const getDefautCart=()=>{
    let cart={}
    for (let i=1;i<PRODUCTS.length+1;i++){
        cart[i]=0;
    }
    return cart;
};
export const ShopContextProvider=(props)=>{
    const [cartItems,setCartItems]=useState(getDefautCart());

const getTotalCartAmount=()=> {
    let totalAmount=0;
    for (const item in cartItems){
        if (cartItems[item]>0){
            let itemInfo=PRODUCTS.find((product)=> product.id===Number(item));
            totalAmount+=cartItems[Item]*itemInfo.price
        }
    }
    return totalAmount;
}

const addToCart=(itemId)=>{
    setcartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}));
};


const removeFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev, [itemId]: prev[itemId]-1}));
};

const updateCartItemCount=(newAmount,itemId) =>{
    setCartItems((prev)=> ({...prev,[itemId]:newAmount}))
}
const checkout=()=>{
    setCartItems(getDefautCart());
}
const contextValue={cartItems,addToCart,removeFromCart,updateCartItemCount,getTotalCartAmount};
console.log(cartItems);
    return (<ShopContext.Provider value={contextValue}>
        {props.children}
        </ShopContext.Provider>)
};