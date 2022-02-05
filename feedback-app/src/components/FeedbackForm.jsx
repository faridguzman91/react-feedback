import React from "react";
import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import { setInteractionMode } from "vee-validate";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (event) => {
    //useState conditionals
    //if text is nothong, return no update
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
      //else if text is nothing and no whitespace and length text < charachters
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
      setBtnDisabled(true);
      //else when all conditions met , set disabled false and message update null
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(event.target.value);
  };

  return (
    <Card>
      <form>
        <h2>Give us a rating</h2>
        {/* todo */}
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
  );
}

export default FeedbackForm;
