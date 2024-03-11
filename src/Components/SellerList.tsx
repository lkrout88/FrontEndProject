import React, { useEffect, useState } from "react";
import { Seller } from "../Models/Seller";
import { getAllSellerAPI } from "../Services/SellerService";

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
      {allSellers.map((seller) => (
        <SellerList key={seller.sellerName }  />
      ))}
    </>
  );
}

