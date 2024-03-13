import React, { useState } from "react";
import { AddProduct } from "../Components/AddProduct";
import { ProductList } from "../Components/ProductList";

export function ProductPage(){
    return (<><h1>Products Page!</h1>        
        <div id="ProductList"><ProductList></ProductList></div>
        <div id="AddProduct"><AddProduct></AddProduct></div>        
    </>);

    
}