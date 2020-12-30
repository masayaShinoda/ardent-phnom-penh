import React from "react"
import { useState, useEffect } from "react"
//images import
import celestialLongBlack from "../images/celestial mockup-01_result.jpg"
import celestialShortBlack from "../images/celestial mockup-02_result.jpg"
import celestialLongWhite from "../images/celestial mockup-03_result.jpg"
import celestialShortWhite from "../images/celestial mockup-04_result.jpg"
//styles import
import Styles from "./frontpage.module.css"
import "./gallery.css"

export default function Frontpage() {
  const galleryImages = [
    celestialLongBlack,
    celestialShortBlack,
    celestialLongWhite,
    celestialShortWhite
  ]
  const [index, setIndex] = useState(0);
  // console.log(galleryImages.length)
  // useEffect(() => {
  //   document.getElementById("parent").classList.toggle("dark")
  // })
  return (
    <div className={Styles.frontpage}>
      {/* <div className={Styles.gallery}>
        {frontpageImages.map(image => {
          return <img src={image} alt={image}></img>
        })}
      </div> */}
      <div className="carousel">
        <div className="slides">
          {/* {galleryImages.map(image => {
           return <img src={image} alt="slide image" className="slide"></img>
          })} */}
          <img src={galleryImages[index]} alt={galleryImages[index]} className="slide" />
        </div>
        <div className="controls">
          <button onClick={() => {
          if (index < galleryImages.length - 2) {
            setIndex(galleryImages.length - 1)
          } else {
            setIndex(index - 1)
          }         
          }} className="control prev-slide">&#9668;</button>
          <button onClick={() => {
          if (index > galleryImages.length - 2) {
            setIndex(0)
          } else {
            setIndex(index + 1)
          }
          }} className="control next-slide">&#9658;</button>
        </div>
      </div>
    </div>
    
  )

}