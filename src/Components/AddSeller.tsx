import { setDefaultResultOrder } from "dns";
import React, { SyntheticEvent, useState } from "react";
import { Seller } from "../Models/Seller";
import { AddNewSellerAPI } from "../Services/SellerService";

export function AddSeller(){
    const [userInput, setUserInput] = useState<string>("")
    const[resultMessage, setResultMessage ]=useState<string>("");
    function userInputHandler (event:SyntheticEvent){
        let textBox =event.target as HTMLTextAreaElement;
        setUserInput(textBox.value);
    }
    function buttonClickHandler(){
        
            let seller:Seller = {
                sellerName:userInput
                
            } 
        
        AddNewSellerAPI(seller)
        .then(() =>{
        // window.location.reload();
        setUserInput("");
        setResultMessage("Seller added successfully!")
         setTimeout(() => {
            // window.location.reload();
         }, 1890000);
         window.location.reload();
        
         })
         .catch((err) => {
            console.log(err.message);
            if (err.message ==='Duplicate Seller'){
                setResultMessage("A seller with the same name already exists")
                
            }else {
                setResultMessage('An error occurred while adding the seller.');
            }
         });
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