import React from "react"
import FbLogo from "../images/fb-logo.svg"
import IgLogo from "../images/ig-logo.svg"
import styles from "../styles/footer.module.css"

export default function Footer() {
    return (
        <div className={styles.footer}>
            <p>
                &#169; {new Date().getFullYear()} Ardent Phnom Penh
            </p>
            <div>
                <a href="https://www.facebook.com/ardent.phnompenh/">
                    <img src={FbLogo} alt="FB logo" />
                </a>
                <a href="https://www.instagram.com/ardent.phnompenh/">
                    <img src={IgLogo} alt="IG logo" />
                </a>
            </div>
        </div>
    )
}
