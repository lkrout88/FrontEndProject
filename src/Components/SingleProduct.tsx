import React, { SyntheticEvent, useState } from "react";
import { Product } from "../Models/Product";
import { deleteSomeProduct, updateSomeProduct } from "../Services/ProductService";


interface ProductInterface {
    data:Product
    //selectProductHandler:Function 
}

export function SingleProduct(props:ProductInterface){
    /*function buttonClickHandle(){
        props.selectProductHandler(props.data.productName);
    }*/

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

    function handleDelete(){
        deleteSomeProduct(props.data.productId);
        window.location.reload();
    }

    function handleUpdate(){
        let product : Product = {
            productId:props.data.productId,
            productName:userProductNameInput,
            productPrice:parseFloat(userProductPriceInput.trim()),
            sellerName:userSellerNameInput
        }
        updateSomeProduct(product);
        window.location.reload();
    }

    return(
        <>
        <div id="Product">
            <div id="ProductDetails">
                <h4>Product Details - ID {props.data.productId}</h4>
                <p>Name: {props.data.productName}</p>
                <p>Price: {props.data.productPrice}</p>
                <p>Seller Name: {props.data.sellerName}</p>
            </div>
            <div id="ProductMenu">
                <h4>Product Menu!</h4>
                <label>Enter Product Name: </label>
                <input type="text" onChange={userProductNameHandler} value={userProductNameInput}/>
                <label>Enter Product Price: </label>
                <input type="text" onChange={userProductPriceHandler} value={userProductPriceInput}/>
                <label>Enter Seller Name: </label>
                <input type="text" onChange={userSellerNameHandler} value={userSellerNameInput}/>

                <button onClick={handleUpdate}>Update</button>
                <button onClick={handleDelete}>Delete</button>
                <button>Show/Hide Menu</button>
            </div>
        </div>
        </>
    )
}