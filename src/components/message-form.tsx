import React, { useState } from "react";
import axios from "axios";
import { Message } from "../types";


const MessageForm = (props: any) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  //TODO: Turn this function into a curry function
  // const preventDefault = (e) => {
  //   e.preventDefault()
  //   setName(e.target.value)
  // }

  const publishTodb = async (message: Message) => {
    await axios.post("/api/messages/", message, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const publishMessage = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newMessage = {
      name: name,
      message: message,
    };
    publishTodb(newMessage);
    props.setFormTrigger(true);
    setName("");
    setMessage("");
  };

  return (
    <>
      <h1> Annonymous Message Board</h1>
      <h3>Write Your Message Here</h3>
      <form id="my-form" onSubmit={publishMessage}>
        <label htmlFor="Name">Your Name</label>
        <input
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            e.preventDefault();
            setName(e.target.value);
          }}
          id="name"
          value={name}
          placeholder="Type here what you want to be called"
          type="text"
        />
        <label htmlFor="message">Message</label>
        <textarea
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            e.preventDefault();
            setMessage(e.target.value);
          }}
          id="message"
          value={message}
          placeholder="Type here what you want to say to the world"
        ></textarea>
        <button>Publish</button>
      </form>
    </>
  );
};

export default MessageForm;
