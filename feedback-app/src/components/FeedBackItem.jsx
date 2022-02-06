import Card from "./shared/Card"
import PropTypes from "prop-types"
import { FaTimes } from "react-icons/fa";
import {useContext} from 'react'
import FeedbackContext from "./context/FeedbackContext";

function FeedBackItem({ item }) {
  // const handleClick = () => {
  //     setRating((prev) => {
  //         return prev + 1
  //     })
  // }
const {deleteFeedback} = useContext(FeedbackContext)

  return (
    <Card>
      {/* //children */}
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color='purple' />
      </button>
      <div className="text-display">{item.text}</div>
   </Card>
  )
}

FeedBackItem.propTypes = {
  item: PropTypes.object.isRequired
}


export default FeedBackItem
