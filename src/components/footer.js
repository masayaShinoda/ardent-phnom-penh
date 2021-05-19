import React from "react"
import Styles from "../styles/footer.module.css"

export default function Footer() {
    return (
        <div className={Styles.footer}>
            <p>
                &#169; {new Date().getFullYear()} Ardent Phnom Penh
            </p>
        </div>
    )
}
