import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import BackBtn from "../components/backBtn"
import styles from "../styles/about.module.css"

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
                <div classNAme={styles.contactContainer}>
                    
                </div>
            </div>
            

        </Layout>
    )
}