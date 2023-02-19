import { useState } from "react";
import { useMutation, useQuery } from "../convex/_generated/react";

export default function App() {
  const messages = useQuery("listMessages") || [];

  const [newMessageText, setNewMessageText] = useState("");
  const sendMessage = useMutation("sendMessage");

  const [name] = useState(() => "User " + Math.floor(Math.random() * 10000));
  async function handleSendMessage(event) {
    event.preventDefault();
    setNewMessageText("");
    await sendMessage(newMessageText, name);
  }
  return (
    <main>
      <h1>BarterBuddies</h1>
      <form onSubmit={handleSendMessage}>
        <input
          value={newMessageText}
          onChange={event => setNewMessageText(event.target.value)}
          placeholder="Write a message…"
        />
        <input type="submit" value="Send" disabled={!newMessageText} />
      </form>
      <p className="badge">
        <span>{name}</span>
      </p>
      <div className = "card-container">
        {messages.map(message => (
          <div key={message._id.toString()}>
            <span>{new Date(message._creationTime).toLocaleTimeString()}</span>
            <div className = "card">
            <div className="card-body">
            <img src = "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcHUyMzMxNzg4LWltYWdlLXJtNTAzLTAxXzEtbDBqOXFyYzMucG5n.png?s=NjVuBb-Kdw49uxifZtlp1-3P4mypZAScmHj9-qHiDSk" width = "250px" height = "350px"  object-fit = "cover"></img>
            {message.author}<br></br>
            {message.body}
            </div>
        </div>
          </div>
          
        ))}
        </div>
    </main>
  );
}