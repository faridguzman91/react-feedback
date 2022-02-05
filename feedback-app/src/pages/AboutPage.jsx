import React from "react"
import Card from "../components/shared/Card"

function AboutPage() {
  return (
  <Card>
    <div  className="about">
        <h1>About this project</h1>
        <p>this is a react app to leave feedback for a product or service</p>
        <p>v1</p>

        <a href="/">back to home</a>
    </div>
  </Card>
  )
}

export default AboutPage
