import React from "react"
import { useState, useEffect } from "react";

import SEO from "./seo"
import Nav from "./nav"
import Footer from "./footer"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
//import css reset
import "../styles/reset.css"
import "../styles/layout.css"

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== "undefined"
  
function Layout({ children, title }) {
    const [isDarkMode, setDarkMode] = useState(false)
    
    useEffect(() => {
        if (isBrowser) {    
            const darkmodeStatus = localStorage.getItem("darkmode")
            if (darkmodeStatus === "dark") {
                setDarkMode(true)        
            } else {
                setDarkMode(false)                
            }
        }
    }, [])

    useEffect(() => {       

        if(isDarkMode) {
            document.getElementById("parent").classList.add("dark")
            localStorage.setItem("darkmode", "dark")
            // setDarkMode(true)//
        } else {
            document.getElementById("parent").classList.remove("dark")
            localStorage.setItem("darkmode", "light")
            // setDarkMode(false)
        }
        // localStorage.setItem("darkmode", isDarkMode)

    }, [isDarkMode])


    const goDarkBtn = <button onClick={() => {setDarkMode(!isDarkMode)}} className="goDarkBtn">
                        <FontAwesomeIcon icon={faMoon} title="Lights off" style={{width: `1em`, maxWidth: `1em`}} />
                        <FontAwesomeIcon icon={faLightbulb} title="Lights on" style={{width: `1em`, maxWidth: `1em`}} />
                      </button>
                      
    return (
        <div id="parent" className="parent"> {/* no dark className by default so that useEffect toggles it to dark by default */}
            <SEO title={title}></SEO>
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