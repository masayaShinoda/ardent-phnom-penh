import React from "react"
import Gallery from "./gallery"
//styles import
import Styles from "../styles/frontpage.module.css"

export default function Frontpage() {

  return (
    <div className={Styles.frontpage}>
        <Gallery />
        <div className={Styles.frontpageContent} style={{border: `1px solid purple`,width: `80vw`, height: `150vh`}}>
        </div>
    </div>
    
  )

}