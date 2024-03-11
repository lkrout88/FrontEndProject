import React from "react";
import { Product } from "../Models/Product";

interface ProductInterface {
    data:Product
    //selectProductHandler:Function 
}

export function SingleProduct(props:ProductInterface){
    /*function buttonClickHandle(){
        props.selectProductHandler(props.data.productName);
    }*/

    return(
        <>
        <h3>Product Details - {props.data.productId}</h3>
        <p>Name: {props.data.productName}</p>
        <p>Price: {props.data.productPrice}</p>        
        <p>Seller Name: {props.data.sellerName}</p>
        </>
    )
}