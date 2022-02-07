import {createContext, useState, useEffect} from 'react'
// import { v4 as uuidv4 } from "uuid"


const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {

  //set state for loader spinner
   const [isLoading, setIsLoading] = useState(true)

    const [feedback, setFeedback] = useState([])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    //fetch feedback from back end
    useEffect(() => {
      fetchFeedback()
    }, []) 


    //Fetch feedback fetch api = fetch data from back end json, queries and sorting order
    const fetchFeedback = async () => {
     

      const response = await fetch(`/feedback?sort=id&_ordr=desc`)
      const data = await response.json()

      //call function
    setFeedback(data)
    setIsLoading(false)
    }

  //add feedback, async dew feedback
  const addFeedback = async (newFeedback) => {

    const response = await fetch('/feedback', {
      method: 'POST',
      headers:  
        {
          'Content-Type': 'application/json'
        }
      , 
      body: JSON.stringify(newFeedback)
    })

    const data = await response.json()

    //add new id to a NEW feedback automatically
    // newFeedback.id = uuidv4()
    //setFeedback and spread feedback info already in feedback , with the newest feedback
    setFeedback([data, ...feedback])
  }


      //delete feedback
     const deleteFeedback = async(id) => {
       if (window.confirm("you sure u wanna delete?")) {
         await fetch(`/feedback/${id}`, {method: 'DELETE'})
         setFeedback(feedback.filter((item) => item.id !== id))
       }
     }

     //update feedback item
     //set feedback to map through item with id then spread item properties, with the updated item, else just update item no id

     const updateFeedback = async (id, updateItem) => {

      const response = await fetch(`/feedback/${id}` , {
        method: 'PUT',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(updateItem)
      })

      const data = await response.json()

         setFeedback(feedback.map((item) => item.id === id ? {...item, ...data} : item))
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
        isLoading,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext