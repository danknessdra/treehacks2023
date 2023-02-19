

import { useState } from "react";
import { useMutation, useQuery } from "../convex/_generated/react";
const forum = ()=> {
    const messages = useQuery("listMessages") || [];
  
    const [newTitleText, setNewTitleText] = useState("");
    const [newTag, setNewTag] = useState("");
    const sendMessage = useMutation("sendMessage");
    const [newDescription, setNewDescription] = useState("");
  
    const [name] = useState(() => "User " + Math.floor(Math.random() * 10000));
    async function handleSendMessage(event) {
      event.preventDefault();
      setNewTitleText("");
      setNewTag("");
      setNewDescription("");
      await sendMessage(newTitleText, newDescription, newTag, name);
    }
    return (
      <main>
        <h1>BarterBuddies</h1>
        <form onSubmit={handleSendMessage}>
          <input
            value={newTitleText}
            onChange={event => setNewTitleText(event.target.value)}
            placeholder="Title"
          />
          <input
            value={newTag}
            onChange={event => setNewTag(event.target.value)}
            placeholder="Tag"
          />
          <input
            value={newDescription}
            onChange={event => setNewDescription(event.target.value)}
            placeholder="Description"
          />
          <input type="submit" value="Send"/>
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
              {/* <img src = "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcHUyMzMxNzg4LWltYWdlLXJtNTAzLTAxXzEtbDBqOXFyYzMucG5n.png?s=NjVuBb-Kdw49uxifZtlp1-3P4mypZAScmHj9-qHiDSk" width = "250px" height = "350px"  object-fit = "cover"></img> */}
              {message.title}<br></br>
              {message.tag}
              <br></br>
              {message.description}<br></br>
              {message.author}
              </div>
          </div>
            </div>
            
          ))}
          </div>
      </main>
    );
  }

  export default forum;