import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

export default function BackBtn({ destination }) {

    return (
        <Link 
            to={destination === `home` ? `/` : `/${destination}`} 
            className="backBtn"
        >
            <FontAwesomeIcon icon={faArrowCircleLeft} title="Back" style={{width: `1em`, maxWidth: `1em`}} />
            &nbsp;
            <p>
            {destination}
            </p>
        </Link>
    )
}