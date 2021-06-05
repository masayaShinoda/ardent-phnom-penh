import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Gallery from "./gallery"
//styles import
import Styles from "../styles/frontpage.module.css"

export default function Frontpage() {
  
  const data = useStaticQuery(graphql`
    query FrontpageQuery {
      allDatoCmsFrontpageContent {
        edges {
          node {
            id
            active
            heading
            image {
              alt
              url
            }
            text
            callToActionText
            callToAction
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div className={Styles.frontpage}>
        <Gallery />
        <div className={Styles.frontpageContent + ` frontpageContent`}>
          {data.allDatoCmsFrontpageContent.edges 
            && data.allDatoCmsFrontpageContent.edges.map((content) =>
              (
                <div className={Styles.frontpageContentBox + ` frontpageContentBox`} style={{margin: `5vmin 0`}}>
                  <span>
                    <h1>{content.node.heading}</h1>
                    <p>{content.node.text}</p>
                    {content.node.callToAction 
                    ? <a href={content.node.callToAction} className="actionBtn">
                        {content.node.callToActionText}
                      </a> 
                    : null}
                  </span>
                  <img src={content.node.image.url} alt={content.node.image.alt && content.node.image.alt} />
                </div>
              )
            )
          }
        </div>
    </div>    
  )
}
