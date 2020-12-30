import React from "react"
import { useState, useEffect } from "react";
import Styles from "./nav.module.css"

function Nav() {
    const [isDarkMode, setDarkMode] = useState(false);
 
    useEffect(() => {
        // if(isDarkMode) {
            document.getElementById("parent").classList.toggle("dark")
        // }
    })
    return (
        <div className={Styles.navContainer}>
            <button onClick={() => {
                setDarkMode(!isDarkMode);
                // localStorage.setItem("mode", JSON.stringify(isDarkMode))
            }}>Go dark!</button>
        </div>
    )
}

export default Nav