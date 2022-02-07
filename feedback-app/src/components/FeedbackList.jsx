/* eslint-disable array-callback-return */
import { motion, AnimatePresence } from "framer-motion"
import {useContext} from 'react'
import FeedbackContext from "./context/FeedbackContext"
import React from "react"
import PropTypes from "prop-types"
import FeedBackItem from "./FeedBackItem"
import Spinner from "./shared/Spinner"


function FeedbackList({}) {
  // console.log(feedback)

  const {feedback, isLoading} = useContext(FeedbackContext)

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>no feedback yet</p>
  }

  //check if loading is true then render feedback list
  // add spinner when loading

  return isLoading ? (<Spinner />) : (
     <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          // <div>{item.rating}</div>
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedBackItem
              key={item.id}
              item={item}
              // handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )

  // return (
   
  // )

  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => (
  //       // <div>{item.rating}</div>
  //       <FeedBackItem
  //         key={item.id}
  //         item={item}
  //         handleDelete={handleDelete}
  //       />
  //     ))}
  //   </div>
  // )
}

// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// }

export default FeedbackList
