import React from "react";
import { Seller } from "../Models/Seller";

interface SellerInterface {
    data:Seller
    //selectProductHandler:Function 
}

export function SingleSeller(props:SellerInterface){
    /*function buttonClickHandle(){
        props.selectProductHandler(props.data.productName);
    }*/

    return(
        <>
       
            
        <h3>Seller Details: </h3>
        <div id="Sellers">
        <p>Name: {props.data.sellerName}</p>
        </div>
        </>
    )
}
