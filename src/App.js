import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

const AUTHORS = {
  ME: "ME",
  BENDER_BOT: "BENDER_BOT",
};

const REPLY_MESSAGE = "Beep-boop-beep, kiss my shiny metal ass, human!";

const FORM_ID = "message-form";

function App() {
  const [messages, setMessages] = useState([]);

  // This hook will trigger on messages array changes
  useEffect(() => {
    if (
      messages.length > 0 &&
      messages[messages.length - 1].author === AUTHORS.ME
    ) {
      setTimeout(() => {
        setMessages([
          ...messages,
          { text: REPLY_MESSAGE, author: AUTHORS.BENDER_BOT },
        ]);
      }, 1500);
    }
  }, [messages]);

  // TODO: This method should be used as a submit function for a form
  const onSubmitMessage = (event) => {
    event.preventDefault()

    const message = event.target[0].value;

    if (message) {
      document.getElementById(FORM_ID).reset();

      setMessages([...messages, { text: message, author: AUTHORS.ME }]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="message-form">
          {messages.map((item) => (
            <div className="message">
              <span>Author: {item.author}</span>
              <br />
              <text>{item.text}</text>
            </div>
          ))}
          <form id={FORM_ID} className="message-form" onSubmit={onSubmitMessage}>
            <input placeholder="Message..." id="message" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
