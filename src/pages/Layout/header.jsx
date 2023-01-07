import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

export default function Header() {

    useEffect(() => {
        console.log("useEffect - header render")

    });
    return (
        <div className="header">
            React Test App
        </div>
    );
}