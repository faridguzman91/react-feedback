import React from 'react'
import { useState, useContext } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import FeedbackContext from './context/FeedbackContext'
import RatingSelect from './RatingSelect'

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const {addFeedback} = useContext(FeedbackContext)

  const handleTextChange = (event) => {
    //useState conditionals
    //if text is nothong, return no update
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
      //else if text is nothing and no whitespace and length text < charachters
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
      //else when all conditions met , set disabled false and message update null
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }

    setText(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if(text.trim().length > 10) {
      const newFeedback = {
        text,
        rating
      }

      addFeedback(newFeedback)

      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Give us a rating</h2>
        {/* todo */}
        <RatingSelect select={(rating)=> setRating(rating)} rating={rating}/>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="write a review"
            value={text}
          />
          <Button type="submit" version="secondary" isDisabled={btnDisabled}>
            send
          </Button>
        </div>
        {/* 
        concat the message prop and message div */}
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
