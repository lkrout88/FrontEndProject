import { Product } from "../Models/Product";

const apiBaseUrl : string = "http://localhost:9003/product/";

export function getAllProductAPI(){
    return fetch(apiBaseUrl, {method:"GET"});
}

export function postSomeProduct(data:Product){
    return fetch(apiBaseUrl, {
        method:"POST",
        mode:"cors",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    })
}

export function deleteSomeProduct(data:Product["productId"]){
    return fetch(apiBaseUrl + data, {
        method:"DELETE",
        mode:"cors",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    })
}

export function updateSomeProduct(data:Product["productId"]){
    return fetch(apiBaseUrl + data, {
        method:"PUT",
        mode:"cors",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    }) 
}