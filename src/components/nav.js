import React from "react"
import { Link } from "gatsby"

import Logo from "../images/ardent-logo-01-transparent_result.webp"
import LogoDark from "../images/ardent-logo-02-transparent_result.webp"

import Styles from "../styles/nav.module.css"

export default function Nav ({ goDarkBtn }) {
   
    return (
        <div className={Styles.navContainer + ` navContainer`}>
            <Link to="/">
                <img 
                    className="logo" src={Logo} alt="Logo"
                />
                <img 
                    className="logoDark" src={LogoDark} alt="Logo"
                />
            </Link>
            <nav>
                <Link to="/">
                    Store
                </Link>
                {goDarkBtn}
            </nav>
            {/* <Link to="/">Home</Link> */}
        </div>
    )
}

