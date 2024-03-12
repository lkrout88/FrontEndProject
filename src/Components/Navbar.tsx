import React from "react";
import { Link } from 'react-router-dom';
import '../App.css';

export function Navbar(){
    return (
        <>
        <Link to="/home">Home</Link>
        <Link to="/seller">Seller Page</Link>
        <Link to="/product">Product Page</Link>
        </>
    )
}