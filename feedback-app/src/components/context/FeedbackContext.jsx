import {createContext, useState} from 'react'
import { v4 as uuidv4 } from "uuid"


const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {

    const [feedback, setFeedback] = useState([
      {
        id: 1,
        text: "This item is from feedback context",
        rating: 10,
      },
      {
        id: 2,
        text: "This item is from feedback context",
        rating: 10,
      },
      {
        id: 3,
        text: "This item is from feedback context",
        rating: 10,
      },
    ])
    
      const addFeedback = (newFeedback) => {
        //add new id to a NEW feedback automatically
        newFeedback.id = uuidv4()
        //setFeedback and spread feedback info already in feedback , with the newest feedback
        setFeedback([newFeedback, ...feedback])
      }

     const deleteFeedback = (id) => {
       if (window.confirm("you sure u wanna delete?")) {
         setFeedback(feedback.filter((item) => item.id !== id))
       }
     }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext