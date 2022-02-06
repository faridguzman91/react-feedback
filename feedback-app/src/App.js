import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import Card from "./components/shared/Card"
import Header from "./components/Header"
// import FeedBackItem from "./components/FeedBackItem";
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
// import Card from "./components/shared/Card";
import AboutPage from "./pages/AboutPage"
import AboutIcon from "./components/AboutIcon"
import Post from "./components/Post"
import {FeedbackProvider} from './components/context/FeedbackContext'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

 

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
            <Route path="/post/*" element={<Post />} />
          </Routes>

          <Card>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/about" activeClassName="active">
              about
            </NavLink>
          </Card>
          <AboutIcon />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
