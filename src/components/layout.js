import React from "react"
import { useState, useEffect } from "react";

import SEO from "./seo"
import Nav from "./nav"
import Footer from "./footer"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
//import css reset
import "../styles/reset.css"
import "../styles/layout.css"

function Layout({ children }) {
    const [isDarkMode, setDarkMode] = useState(false);
    
    useEffect(() => {
        // document.getElementById("parent").classList.toggle("dark")
        if(isDarkMode) {
            document.getElementById("parent").classList.add("dark");
            // localStorage.setItem("mode", true)
        } else {
            document.getElementById("parent").classList.remove("dark");
            // localStorage.setItem("mode", false)
        }        
    })
    
    const goDarkBtn =  
        <button 
                onClick={() => {
                    setDarkMode(!isDarkMode);
                }} 
                className="goDarkBtn"
                title="Lights on/off"
            >                
                <FontAwesomeIcon icon={faMoon} />
        </button>
    return (
        <div id="parent" className="parent"> {/* no dark className by default so that useEffect toggles it to dark by default */}
            <SEO></SEO>
            <Nav goDarkBtn={goDarkBtn}>
                
            </Nav> 
            <div className="content">
                {children}
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Layout