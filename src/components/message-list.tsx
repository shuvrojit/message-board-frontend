
const MessageList = ({name, date,message}) => {
  return (
    <>
      <p>{date}</p>
      <h3>{name}</h3>
      <p>{message}</p>
    </>
  )
}

export default MessageList
