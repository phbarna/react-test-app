import { useEffect } from "react";

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