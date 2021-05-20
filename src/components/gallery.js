import React from "react"
import { useState, useEffect } from "react"
//images import
// import celestialLongBlack from "../images/celestial mockup-01_result.jpg"
// import celestialShortBlack from "../images/celestial mockup-02_result.jpg"
// import celestialLongWhite from "../images/celestial mockup-03_result.jpg"
// import celestialShortWhite from "../images/celestial mockup-04_result.jpg"
import celestialGif from "../images/Celestial-Ad-8S-White-Short-Sleeve-1.gif"
import "../styles/gallery.css"

export default function Gallery() {
    // const galleryImages = [
    //     celestialLongBlack,
    //     celestialShortBlack,
    //     celestialLongWhite,
    //     celestialShortWhite
    //   ]

  // const [index, setIndex] = useState(0);

    return (
        <div className="carousel">
          <img src={celestialGif} alt="Celestial Gif" />
          {/* <div className="slides"> */}
            {/* <img src={galleryImages[index]} alt={galleryImages[index]} className="slide" /> */}
          {/* </div> */}
          {/* <div className="controls">
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
          </div> */}
      </div>
    )
}
