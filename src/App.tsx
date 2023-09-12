import { useEffect, useState } from "react";
import MessageForm from "./components/message-form";
import MessageList from "./components/message-list";
import axios from "axios";

function App() {
  const [messages, setMessages] = useState([]);
  const [formTrigger, setFormTrigger] = useState(true);

  useEffect(() => {
    if (formTrigger) {
      getMessages();
      setFormTrigger(false);
    }
  }, [formTrigger]);

  async function getMessages() {
    const res = await axios.get("/api/messages");
    console.log(res.data.messages);
    setMessages(res.data.messages);
  }

  return (
    <div className="container">
      <div className="message-form">
        <MessageForm setFormTrigger={setFormTrigger} />
      </div>

      <div className="message-lists">
        <h2>Message Board</h2>
        {messages.map((data) => {
          return (
            <div className="card">
              <MessageList
                name={data.name}
                date={data.createdAt}
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
