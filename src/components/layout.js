import React from "react"
import SEO from "../components/seo"
import Nav from "../components/nav"
import Footer from "../components/footer"

import Styles from "../components/layout.module.css"
//import css reset
import "./reset.css"

function Layout({ children }) {
    return (
        <div id="parent" className="parent"> {/* no dark className by default so that useEffect toggles it to dark by default */}
            <SEO></SEO>
            <Nav></Nav> 
            <div className={Styles.content}>
                {children}
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Layout