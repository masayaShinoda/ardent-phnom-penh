import React from "react"
import Gallery from "./gallery"
//styles import
import Styles from "../styles/frontpage.module.css"

export default function Frontpage() {

  return (
    <div className={Styles.frontpage}>
        <Gallery />
        <div className={Styles.frontpageContent + ` frontpageContent`} style={{height: `150vh`}}>
        </div>
    </div>
    
  )

}