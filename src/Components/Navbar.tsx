import React from "react";
import { Link } from 'react-router-dom';
import '../App.css';

export function Navbar(){
    return (
        <>
        <a><Link to="/home">Home</Link></a>
        <a><Link to="/seller">Seller Page</Link></a>
        <a><Link to="/product">Product Page</Link></a>
        </>
    )
}