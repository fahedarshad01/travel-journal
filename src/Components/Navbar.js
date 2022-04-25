import React from "react";
import Logo from "../assets/images/earth_logo.svg"

export default function Navbar() {
    return (
        <nav>
            <img src={Logo} alt="Earth" />
            <p className="logo">my travel journal.</p>
        </nav>
    )
}