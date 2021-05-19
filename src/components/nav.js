import React from "react"
import { Link } from "gatsby"

import Styles from "../styles/nav.module.css"

export default function Nav ({ goDarkBtn }) {
   
    return (
        <div className={Styles.navContainer}>
            <Link to="/">Home</Link>
            {goDarkBtn}
        </div>
    )
}

