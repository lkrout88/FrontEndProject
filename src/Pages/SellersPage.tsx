import { getAllSellerAPI } from "../Services/SellerService";
export function SellersPage(){
    function logAllSeller(){
        getAllSellerAPI()
        .then(response => {return response.json()})
        .then(json => {console.log(json)});
    }
    return (<><h1>sellers page worked!</h1>
    <button onClick={logAllSeller}>Click Here to List All Sellers</button>
    </>);
    
}