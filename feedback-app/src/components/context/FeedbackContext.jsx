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

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    
    //add feedback
      const addFeedback = (newFeedback) => {
        //add new id to a NEW feedback automatically
        newFeedback.id = uuidv4()
        //setFeedback and spread feedback info already in feedback , with the newest feedback
        setFeedback([newFeedback, ...feedback])
      }

      //delete feedback
     const deleteFeedback = (id) => {
       if (window.confirm("you sure u wanna delete?")) {
         setFeedback(feedback.filter((item) => item.id !== id))
       }
     }

     //update feedback item
     //set feedback to map through item with id then spread item properties, with the updated item, else just update item no id

     const updateFeedback = (id, updateItem) => {
         setFeedback(feedback.map((item) => item.id === id ? {...item, ...updateItem} : item))
     }

     const editFeedback = (item) => {
         setFeedbackEdit({
             item,
             edit: true
         })
     }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext