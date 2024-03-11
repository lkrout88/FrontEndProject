import { Seller } from "../Models/Seller";

const apiBaseUrl : string = "http://localhost:9003/"

export function getAllSellerAPI(){
    return fetch(apiBaseUrl + "seller",{
        method:"GET"
           
    });


}