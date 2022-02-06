import React from 'react'
import { useContext } from "react"
import FeedbackContext from "./context/FeedbackContext"

function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)
//calculate ratings avg

let average = feedback.reduce((acc,cur) => {
    return acc + cur.rating
}, 0) / feedback.length

//round up
average = average.toFixed(1).replace(/[.,]0$/,'')


  return <div className='feedback-stats'>
      <h4>{ feedback.length} reviews</h4>
      <h4>average rating: {isNaN(average) ? 0 : average}</h4>

  </div>
}



export default FeedbackStats;
