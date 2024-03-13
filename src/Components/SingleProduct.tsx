import React, { SyntheticEvent, useState } from "react";
import { HashRouter } from "react-router-dom";
import { Product } from "../Models/Product";
import { deleteSomeProduct, updateSomeProduct } from "../Services/ProductService";


interface ProductInterface {
    data:Product;
}

export function SingleProduct(props:ProductInterface){
    
    const [userProductNameInput, setUserProductNameInput] = useState<string>("");
    const [userProductPriceInput, setUserProductPriceInput] = useState<string>("");
    const [userSellerNameInput, setUserSellerNameInput] = useState<string>("");

    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const [resultMessage, setResultMessage] = useState<string>("");

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
        deleteSomeProduct(props.data.productId)
        .then(response => {return response.json()})
        .then(json => {console.log(json)})
        .catch(error => {console.log(error)});
        window.location.reload();
    }

    function handleUpdate(){
        let product : Product = {
            productId:props.data.productId,
            productName:userProductNameInput,
            productPrice:parseFloat(userProductPriceInput.trim()),
            sellerName:userSellerNameInput
        }

        updateSomeProduct(product)
        .then(response => {return response.json()})
        .then(json => {console.log(json)})
        .then(() => {setResultMessage("Product updated successfully!"); setTimeout(window.location.reload.bind(window.location), 1500);})
        .catch(error => {
            console.log(error);
            setResultMessage("An error occured while updating a Product! Please check input values and make sure all 3 are populated!");
            setTimeout(window.location.reload.bind(window.location), 1500);
        });
    }

    function handleShowHide(){
        if(isMenuVisible){
            setIsMenuVisible(false);
        }
        else{
            setIsMenuVisible(true);
        }
    }

    let menuElement;

    if(isMenuVisible){
        menuElement = <>
        <h4>Product Menu!</h4>
        <label>Enter Product Name: </label><input type="text" onChange={userProductNameHandler} value={userProductNameInput}/>
        <label>Enter Product Price: </label><input type="text" onChange={userProductPriceHandler} value={userProductPriceInput}/>
        <label>Enter Seller Name: </label><input type="text" onChange={userSellerNameHandler} value={userSellerNameInput}/>

        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button></>
    }

    return(
        <>
        <div id="Product">
            <div id="ProductDetails">
                <h4>Product Details - ID {props.data.productId}</h4>
                <p>Name: {props.data.productName}</p>
                <p>Price: {props.data.productPrice}</p>
                <p>Seller Name: {props.data.sellerName}</p>
                <p>{resultMessage}</p>
            </div>
            <div id="ProductMenu">
                {menuElement}
                <button onClick={handleShowHide}>Show/Hide Menu</button>
            </div>
        </div>
        <hr></hr>
        </>
    )
}