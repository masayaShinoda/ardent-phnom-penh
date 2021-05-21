import React from "react"
import { Link } from "gatsby"

import celestialGif from "../images/Celestial-Ad-8S-White-Short-Sleeve-1.gif"
import "../styles/gallery.css"

export default function Gallery() {
    return (
        <div className="carousel">
          <img src={celestialGif} alt="Celestial Gif" />
          <span>
            <h1>
              Out Now
            </h1>
            <p>Our first collection, "Celestial" is now available for orders in Phnom Penh, Cambodia.</p>
            <Link to="/" className="actionBtn">Get yours!</Link>
          </span>
      </div>
    )
}
