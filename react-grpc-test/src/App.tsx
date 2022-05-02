import { useState } from "react"
import { useGreeterService } from "./hooks/useGreeterService";

const App = () => {
  const [message, setMessage, responseMessage] = useGreeterService();
  
  return (
    <>
    <h1>Simple message reverser over gRPC</h1>
    <p>(Don't ask me why you would actually want to reverse a string server-side, this is just for fun!</p>
    <label title="Type a message in realtime over the gRPC wire">Type a message in realtime over the gRPC wire:</label>
    <br/>
    <textarea value={message} onChange={(event) => setMessage(event.target.value)}/>
    <p>And see the response message here: {responseMessage}</p>
    </>
  );
}

export default App;
