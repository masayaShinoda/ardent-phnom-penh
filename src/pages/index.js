import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Frontpage from "../components/frontpage"
import "./styles.css"


export default function Home() {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        description
        url
        image
      }
    }
  }
  `)
  return (
      <Layout>
        {/* <h1>{data.site.siteMetadata.title}</h1> */}
        {/* <p>Authentic local brand.</p> */}
        <Frontpage></Frontpage>
      </Layout>    
  )
      
    
}
