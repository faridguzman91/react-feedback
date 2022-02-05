import { useState } from "react";
import Header from "./components/Header";
// import FeedBackItem from "./components/FeedBackItem";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
// import Card from "./components/shared/Card";

function App() {
  //   const title = "BlogPost";
  //   const body = "This is my blog post";
  //   const comments = [
  //     {
  //       id: 1,
  //       text: "comment one",
  //       id: 2,
  //       text: "comment two",
  //       id: 3,
  //       text: "comment 3",
  //     },
  //   ];

  //   const loading = false
  //   const showComments = true
  //   if(loading) return <h1>loading...</h1>

  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('you sure u wanna delete?')) {
      setFeedback(feedback.filter((item) => 
      item.id !== id))
    }
  }


  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
        {/* <Card>Hello</Card> */}
      </div>
    </>
  );
}

export default App;
