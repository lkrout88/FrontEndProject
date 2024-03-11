import { getAllProductAPI, postSomeProduct } from "../Services/ProductService";

export function ProductPage(){
    function logAllProducts(){
        getAllProductAPI()
        .then(response => {return response.json()})
        .then(json => {console.log(json)});
    }

    function postProduct(){
        postSomeProduct()
        .then(response => {return response.json()})
        .then(json => {console.log(json)})
        .catch(error => {console.log(error)});
    }

    return (<><h1>Products Page Worked!</h1>
    <button onClick={logAllProducts}>Click Here to List All Product</button>
    <button onClick={postProduct}>Click Here to Add a Product</button>
    </>);

    
}