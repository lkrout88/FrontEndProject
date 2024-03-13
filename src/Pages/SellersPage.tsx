import React, {useState} from "react";
import { getAllSellerAPI } from "../Services/SellerService";
import { AddNewSellerAPI } from "../Services/SellerService";
import { AddSeller } from "../Components/AddSeller";
import { SellerList } from "../Components/SellerList";
import { Seller } from "../Models/Seller";
import { json } from "stream/consumers";
// import {userInputHandler} from "../Components/AddSeller"

export function SellersPage(){
     const[sellers,setSellers]=useState<Seller[]>([]);

    function logAllSeller(){
        getAllSellerAPI()
        // .then(response => {return response.json()})
        // .then(json => {console.log(json)});
        .then(response => response.json())
    .then(json => {
      // Update the sellers state with the data from the API
      setSellers(json);
    });

}
   
    /*
    function AddSeller(){
        AddNewSellerAPI()
        .then(response => {return response.json()})
        .then(json => {console.log(json)})
        .catch(error => {console.log(error)})
    }
    */
   
    return (<><h1>Seller's Page!</h1>
        
       
        <AddSeller></AddSeller> 
        <SellerList></SellerList> 
        
        {/* <div className = "sellerbutton"> */}
            
    {/* <button onClick={logAllSeller}>Click Here to List All Sellers</button> */}
    {/* <input onChange={userInputHandler} value={userInput}></input> */}
   
    {/* </div> */}
    
    </>
    )
    
}