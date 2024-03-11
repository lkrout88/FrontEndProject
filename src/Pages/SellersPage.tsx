import { getAllSellerAPI } from "../Services/SellerService";
import { AddNewSellerAPI } from "../Services/SellerService";
import { AddSeller } from "../Components/AddSeller";
import { SellerList } from "../Components/SellerList";

// import {userInputHandler} from "../Components/AddSeller"

export function SellersPage(){
    function logAllSeller(){
        getAllSellerAPI()
        .then(response => {return response.json()})
        .then(json => {console.log(json)});
    }
    /*
    function AddSeller(){
        AddNewSellerAPI()
        .then(response => {return response.json()})
        .then(json => {console.log(json)})
        .catch(error => {console.log(error)})
    }
    */
    return (<><h1>sellers page worked!</h1>
        
       
        <AddSeller></AddSeller>
        
        <div style={{ display: 'flex', gap: '60px' }}>
    <button onClick={logAllSeller}>Click Here to List All Sellers</button>
    {/* <input onChange={userInputHandler} value={userInput}></input> */}
   
    </div>
    </>
    )
    
}