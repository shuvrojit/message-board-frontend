import MessageForm from "./components/message-form";
import MessageList from "./components/message-list";

function App() {
  return (
    <>
      <MessageForm />;
      <MessageList name="mango" date={Date.now()} message="nice" />
    </>
  );
}
export default App;
