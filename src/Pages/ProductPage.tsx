import React from "react";
import { getAllProductAPI } from "../Services/ProductService";
import { AddProduct } from "../Components/AddProduct";
import { ProductList } from "../Components/ProductList";

export function ProductPage(){

    const logAllProducts = () =>{
        getAllProductAPI()
        .then(response => {return response.json()})
        .then(json => {console.log(json)});
    }

    /*
    function postProduct(){
        postSomeProduct()
        .then(response => {return response.json()})
        .then(json => {console.log(json)})
        .catch(error => {console.log(error)});
    }
    */

    return (<><h1>Products Page!</h1>
        <div id="ProductList"><ProductList></ProductList></div>
        <div id="AddProduct"><AddProduct></AddProduct></div>
    </>);

    
}