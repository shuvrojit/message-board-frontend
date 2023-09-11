import { useState } from "react";

const MessageForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  //TODO: Turn this function into a curry function
  // const preventDefault = (e) => {
  //   e.preventDefault()
  //   setName(e.target.value)
  // }

  return (
    <>
      <h1> Annonymous Message Board</h1>
      <p>Write Your Message Here</p>
      <form>
        <label htmlFor="Name">Your Name</label>
        <input
          onInput={(e) => {
            e.preventDefault();
            setName(e.target.value);
          }}
          id="name"
          value={name}
          placeholder="Type here what you want to be called"
          type="text"
        />
        <label htmlFor="Name">Message</label>
        <input
          onInput={(e) => {
            e.preventDefault();
            setMessage(e.target.value);
          }}
          id="name"
          value={message}
          placeholder="Type here what you want to say to the world"
          type="text"
        />
        <button>Publish</button>
      </form>
    </>
  );
};

export default MessageForm;
