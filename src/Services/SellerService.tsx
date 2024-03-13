import { Seller } from "../Models/Seller";

const apiBaseUrl : string = "http://localhost:9003/"

export function getAllSellerAPI(){
    return fetch(apiBaseUrl + "seller",{
        method:"GET"
           
    });


}
export function AddNewSellerAPI(data: Seller){
    return fetch(apiBaseUrl+"seller/", {
        method:"POST",
        mode:"cors",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    })
}