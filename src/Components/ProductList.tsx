import React, { useEffect, useState } from "react";
import { Product } from "../Models/Product";
import { SingleProduct } from "./SingleProduct";
import { getAllProductAPI } from "../Services/ProductService";

export function ProductList(){
const [allProducts, setAllProducts] = useState<Product[]>([])

useEffect(()=>{
    getAllProductAPI()
    .then(response=>{return response.json()})
    .then(json=>{setAllProducts(json);});
}, []);

return (
    <>
    {allProducts.map(message =>{return <SingleProduct key={message.productId} data={message}></SingleProduct>})}
    </>
  );
}

