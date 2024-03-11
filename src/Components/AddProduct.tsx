import React, { SyntheticEvent, useState } from "react";
import { Product } from "../Models/Product";
import { postSomeProduct } from "../Services/ProductService";

export function AddProduct(){
    const[userProductNameInput, setUserProductNameInput] = useState<string>("");

    function userInputHandler(event:SyntheticEvent){
        let textBox = event.target as HTMLTextAreaElement;
        setUserProductNameInput(textBox.value);
    }

    function buttonClickHandler(){
        let product : Product = {
            productId:0,
            productName:userProductNameInput,
            productPrice:10.99,
            sellerName:"seller1"
        }
        console.log(product);
        postSomeProduct(product);
    }


    return(<>
        <h3>Add a new product:</h3>
        <input onChange={userInputHandler} value={userProductNameInput}></input>
        <button onClick={buttonClickHandler}>submit</button>
    </>)
}