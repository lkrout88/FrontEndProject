import { Product } from "../Models/Product";

const apiBaseUrl : string = "http://localhost:9003/";

export function getAllProductAPI(){
    return fetch(apiBaseUrl + "product",{method:"GET"});
}

export function postSomeProduct(){
    return fetch(apiBaseUrl + "product", {
        mode:"cors",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({productId:1, productName:"", productPrice:10.99, sellerName:""})
    })
}