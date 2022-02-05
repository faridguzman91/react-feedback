import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
// import FeedBackItem from "./components/FeedBackItem";
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
// import Card from "./components/shared/Card";
import AboutPage from "./pages/AboutPage"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
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

  return (
    <React.Fragment>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats feedback={feedback} />
                  <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                  />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  )
}

export default App
