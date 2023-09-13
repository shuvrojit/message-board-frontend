import { Message } from "../types";

const MessageList = ({ name, createdAt, message }: Message) => {
  const parsedDate = new Date(createdAt).toLocaleString();
  return (
    <>
      <p>{parsedDate}</p>
      <h3>{name}</h3>
      <p>{message}</p>
    </>
  );
};

export default MessageList;
