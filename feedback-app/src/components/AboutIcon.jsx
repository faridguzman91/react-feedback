import React from "react"
import { FaQuestion } from "react-icons/fa"
import {Link} from 'react-router-dom'

function AboutIcon() {
  return (
    <div className="about-link">
      {/* <a href="/about"> */}
      <Link to="/about">
        <FaQuestion size={30} />
      </Link>
      {/* </a> */}
    </div>
  )
}

export default AboutIcon
