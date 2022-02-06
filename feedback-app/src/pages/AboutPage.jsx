import React from "react"
import Card from "../components/shared/Card"
import { Link } from "react-router-dom"

function AboutPage() {
  return (
  <Card>
    <div  className="about">
        <h1>About this project</h1>
        <p>this is a react app to leave feedback for a product or service</p>
        <p>v1</p>

        <Link to="/">back to home</Link>
    </div>
  </Card>
  )
}

export default AboutPage
