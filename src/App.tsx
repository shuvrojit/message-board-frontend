import { useState } from "react";
import MessageForm from "./components/message-form";
import MessageList from "./components/message-list";

function App() {
  const [messages, setMessages] = useState([
    { name: "mango", id: 23, date: Date.now(), message: "nice" },
    { name: "ngo", id: 33, date: Date.now(), message: "nice" },
  ]);

  const updateMessages = (newMessage) => {
    const message = [newMessage, ...messages];
    setMessages(message);
  };

  return (
    <>
      <MessageForm updateMessages={updateMessages} />
      {messages.map((data) => {
        {
          console.log(data);
        }
        return (
          <>
            <MessageList
              name={data.name}
              date={data.date}
              message={data.message}
              key={data.id}
            />
          </>
        );
      })}
    </>
  );
}
export default App;
