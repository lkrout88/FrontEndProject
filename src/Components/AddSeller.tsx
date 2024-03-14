import React, { SyntheticEvent, useState } from "react";
import { Seller } from "../Models/Seller";
import { AddNewSellerAPI } from "../Services/SellerService";

export function AddSeller(){
    const [userInput, setUserInput] = useState<string>("")
    const [resultMessage, setResultMessage ]=useState<string>("");
    function userInputHandler (event:SyntheticEvent){
        let textBox =event.target as HTMLTextAreaElement;
        setUserInput(textBox.value);
    }
    function buttonClickHandler(){
        
            let seller:Seller = {
                sellerName:userInput
                
            } 
        
        AddNewSellerAPI(seller)
        .then(response => {return response.json()})
        .then(json => {console.log(json)})
        .then(() => {setResultMessage("Seller added successfully!"); setTimeout(window.location.reload.bind(window.location), 1500);})
        .catch(error => {
            console.log(error);
            setResultMessage("An error occured while adding a Seller! Please check input values.");
            setTimeout(window.location.reload.bind(window.location), 1500);
        })
            
    }
    return (<>
    <h1>Submit a new seller</h1>
    <p>{resultMessage}</p>
            <input type="text" value={userInput} onChange={userInputHandler} />
            <button onClick={buttonClickHandler}>Add Seller</button>
           
    {/* <input onChange={userInputHandler} value={userInput}></input> */}
    {/* <button onClick={buttonClickHandler}>submit</button> */}
    
    
    </>)
}