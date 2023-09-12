const MessageList = ({ name, date, message }) => {
  const parsedDate = new Date(date).toLocaleString();
  return (
    <>
      <p>{parsedDate}</p>
      <h3>{name}</h3>
      <p>{message}</p>
    </>
  );
};

export default MessageList;
