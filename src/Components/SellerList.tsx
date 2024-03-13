import React, { useEffect, useState } from "react";
import { Seller } from "../Models/Seller";
import { getAllSellerAPI } from "../Services/SellerService";
import { SingleSeller } from "./SingleSeller";

interface SellerListProps{
    sellers:Seller[];
}
/*
const SellerListItem = ({ seller }: { seller: Seller }) => {
    return <div>{seller.sellerName}</div>;
  };

  export const SellerList = ({ sellers }: SellerListProps) => {
    return (
      <div>
        <h2>Sellers List</h2>
        {sellers.map((seller) => (
          <SellerListItem key={seller.sellerName} seller={seller} />
        ))}
      </div>
    );
  };

 */
  export function SellerList(){
    const [allSellers, setAllSellers] = useState<Seller[]>([])
    
    useEffect(()=>{
        getAllSellerAPI()
        .then(response=>{return response.json()})
        .then(json=>{
            setAllSellers(json);
            
        });
    }, []);
    
    return (
        <>
          {allSellers.map(message =>{return <SingleSeller key={message.sellerName} data={message}></SingleSeller>})}
          
        </>
      );
    }
    
  
 
 
 
    

      
