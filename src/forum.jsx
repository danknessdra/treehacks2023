

import { useState } from "react";
import { useMutation, useQuery } from "../convex/_generated/react";
import {Link} from 'react-router-dom';
const forum = ()=> {
    const messages = useQuery("listMessages") || [];
  
    const [newTitleText, setNewTitleText] = useState("");
    const [newTag, setNewTag] = useState("");
    const sendMessage = useMutation("sendMessage");
    const [newDescription, setNewDescription] = useState("");
  
    const [name, setNewName] = useState();

    async function handleSendMessage(event) {
      event.preventDefault();
      setNewTitleText("");
      setNewTag("");
      setNewDescription("");
      await sendMessage(newTitleText, newDescription, newTag, name);
    }
    return (
      <main>
        <input
            value={name}
            onChange={event => setNewName(event.target.value)}
            placeholder="Username"
          />
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
              Title: {message.title}<br></br>
              Tags: {message.tag}
              <br></br>
              Description: {message.description}<br></br>
              Author: {message.author}
              </div>
          </div>
            </div>
            
          ))}
          </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
         <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
              <Link className = "nav-link" to = '/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className = "nav-link" to = '/offers'>Offers</Link>
            </li>
            <li className="nav-item">
              <Link className = "nav-link" to = '/mylistings'>My Listings</Link>
            </li>
          </ul>
         </div>
      </nav>
      </main>
    );
  }

  export default forum;