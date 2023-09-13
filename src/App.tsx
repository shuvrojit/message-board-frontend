import { useEffect, useState } from "react";
import MessageForm from "./components/message-form";
import MessageList from "./components/message-list";
import axios from "axios";
import {Message} from "./types"

export const baseURL = "https://message-board-public-api.onrender.com/"

function App() {
  const [messages, setMessages] = useState([]);
  const [formTrigger, setFormTrigger] = useState<boolean>(true);

  useEffect(() => {
    if (formTrigger) {
      getMessages();
      setFormTrigger(false);
    }
  }, [formTrigger]);

  async function getMessages() {
    const res = await axios.get(baseURL + "messages");
    setMessages(res.data.messages);
  }

  return (
    <div className="container">
      <div className="message-form">
        <MessageForm setFormTrigger={setFormTrigger} />
      </div>

      <div className="message-lists">
        <h2>Message Board</h2>
        {messages.map((data: Message) => {
          return (
            <div className="card">
              <MessageList
                name={data.name}
                createdAt={data.createdAt}
                message={data.message}
                key={data._id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default App;
