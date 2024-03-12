import React, { SyntheticEvent, useState } from "react";
import { Seller } from "../Models/Seller";
import { AddNewSellerAPI } from "../Services/SellerService";

export function AddSeller(){
    const [userInput, setUserInput] = useState<string>("")
    function userInputHandler (event:SyntheticEvent){
        let textBox =event.target as HTMLTextAreaElement;
        setUserInput(textBox.value);
    }
    function buttonClickHandler(){
        let seller:Seller = {
            sellerName:userInput
        }
        AddNewSellerAPI(seller)
        window.location.reload();
        setUserInput("");
    }

    return (<>
    <h1>Submit a new seller</h1>
    
    <input onChange={userInputHandler} value={userInput}></input>
    <button onClick={buttonClickHandler}>submit</button>
    
    
    </>)
}