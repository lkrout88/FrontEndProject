import { Product } from "../Models/Product";

const apiBaseUrl : string = "http://localhost:9003/";

export function getAllProductAPI(){
    return fetch(apiBaseUrl + "product", {method:"GET"});
}

export function postSomeProduct(data:Product){
    return fetch(apiBaseUrl + "product", {
        method:"POST",
        mode:"cors",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    })
}