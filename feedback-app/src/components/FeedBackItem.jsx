import Card from "./shared/Card"
import PropTypes from "prop-types"
import { FaTimes } from "react-icons/fa";

function FeedBackItem({ item, handleDelete }) {
  // const handleClick = () => {
  //     setRating((prev) => {
  //         return prev + 1
  //     })
  // }


  return (
    <Card>
      {/* //children */}
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
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
