import React from "react"
import Styles from "./footer.module.css"

export default function Footer() {
    return (
        <div className={Styles.footer}>
            <p style={{margin: `2.5vh 2.5vw`}}>
                Copyright &#169; Ardent Phnom Penh, {new Date().getFullYear()}
            </p>
        </div>
    )
}
