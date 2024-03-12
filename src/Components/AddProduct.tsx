import React, { SyntheticEvent, useState } from "react";
import { Product } from "../Models/Product";
import { postSomeProduct } from "../Services/ProductService";

export function AddProduct(){
    const[userProductNameInput, setUserProductNameInput] = useState<string>("");
    const[userProductPriceInput, setUserProductPriceInput] = useState<string>("");
    const[userSellerNameInput, setUserSellerNameInput] = useState<string>("");

    function userProductNameHandler(event:SyntheticEvent){
        let textBoxProductName = event.target as HTMLTextAreaElement;
        setUserProductNameInput(textBoxProductName.value);
    }

    function userProductPriceHandler(event:SyntheticEvent){
        let textBoxProductPrice = event.target as HTMLTextAreaElement;
        setUserProductPriceInput(textBoxProductPrice.value);
    }

    function userSellerNameHandler(event:SyntheticEvent){
        let textBoxSellerName = event.target as HTMLTextAreaElement;
        setUserSellerNameInput(textBoxSellerName.value);
    }

    function buttonClickHandler(){
        let product : Product = {
            productId:0,
            productName:userProductNameInput,
            productPrice:parseFloat(userProductPriceInput.trim()),
            sellerName:userSellerNameInput
        }
        
        console.log(product);
        postSomeProduct(product);
        window.location.reload();
    }

    return(<>
        <h3>Add a New Product</h3>
        <label>Enter Product Name: </label>
        <input type="text" onChange={userProductNameHandler} value={userProductNameInput}/>
        <label>Enter Product Price: </label>
        <input type="text" onChange={userProductPriceHandler} value={userProductPriceInput}/>
        <label>Enter Seller Name: </label>
        <input type="text" onChange={userSellerNameHandler} value={userSellerNameInput}/>
        <button onClick={buttonClickHandler}>Submit</button>
    </>)
}