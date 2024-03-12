import React from "react";
import { Seller } from "../Models/Seller";
import { SellersPage } from "../Pages/SellersPage";

interface SellerInterface {
    data:Seller
    //selectProductHandler:Function 
}

export function SingleSeller(props:SellerInterface  ){
    /*function buttonClickHandle(){
        props.selectProductHandler(props.data.productName);
    }*/

    return(
        <>
        
        <h3>Seller Details - </h3>
        <p>Name: {props.data.sellerName}</p>
        
        </>
    )
}
