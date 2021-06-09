import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import BackBtn from "../components/backBtn"
import styles from "../styles/about.module.css"
import FbLogo from "../images/fb-logo.svg"
import IgLogo from "../images/ig-logo.svg"

export default function About() {
    const aboutData = useStaticQuery(graphql`
        query AboutQuery {
            allDatoCmsAboutInfo {
                edges {
                    node {
                        id
                        originalId
                        heading
                        body
                    }
                }
            }
    }`)

console.log(aboutData)
    return (
        <Layout title="About">
            <div className="upperDiv">
                <BackBtn destination="home"/>
                <h1>About</h1>
            </div>            
            <div className={styles.aboutContainer}>
                {aboutData.allDatoCmsAboutInfo && aboutData.allDatoCmsAboutInfo.edges.map(edge => (
                    <span>
                        <h2>{edge.node["heading"]}</h2>
                        <p>{edge.node["body"]}</p>
                    </span>
                ))}
                <div className={styles.contactContainer + ` contactContainer`}>
                    <h2 style={{fontWeight: 700}}>Contact</h2>
                    <p style={{fontSize: `80%`}}>For business inquiries:</p>
                    <a href="mailto:ardent.phnompenh@gmail.com">ardent.phnompenh@gmail</a>
                    <p style={{fontSize: `80%`, marginTop: `.8rem`}}>Social media:</p>
                    <span>
                        <a href="https://www.facebook.com/ardent.phnompenh/">
                            <img src={FbLogo} alt="FB logo" />
                        </a>
                        <a href="https://www.instagram.com/ardent.phnompenh/">
                            <img src={IgLogo} alt="IG logo" />
                        </a>
                        <p>@ardent.phnompenh</p>
                    </span>
                </div>
            </div>
            

        </Layout>
    )
}