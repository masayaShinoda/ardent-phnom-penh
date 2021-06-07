import React from "react"
import { Link } from "gatsby"

import Logo from "../images/ardent-black-logo.svg"
import LogoDark from "../images/ardent-white-logo.svg"

import styles from "../styles/nav.module.css"

export default function Nav ({ goDarkBtn }) {
   
    return (
        <div className={styles.navContainer + ` navContainer`}>
            <Link to="/">
                <img 
                    className="logo" src={Logo} alt="Logo"
                />
                <img 
                    className="logoDark" src={LogoDark} alt="Logo"
                />
            </Link>
            <nav>
                <Link to="/shop">
                    Shop
                </Link>
                <Link to="/about">
                    About
                </Link>
                {goDarkBtn}
            </nav>
            {/* <Link to="/">Home</Link> */}
        </div>
    )
}

