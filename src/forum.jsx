
import { useAuth0} from "@auth0/auth0-react";
import { useState } from "react";
import { useMutation, useQuery } from "../convex/_generated/react";
import {Link} from 'react-router-dom';
import LogoutButton from "./logoutButton";
import { useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
const forum = ()=> {
    const messages = useQuery("listMessages") || [];
  
    const [newTitleText, setNewTitleText] = useState("");
    const [newTag, setNewTag] = useState("");
    const sendMessage = useMutation("sendMessage");
    const [newDescription, setNewDescription] = useState("");
    const { user } = useAuth0();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const addOffer = useMutation("addOffer");
    async function handleSendMessage(event) {
      event.preventDefault();
      setNewTitleText("");
      setNewTag("");
      setNewDescription("");
      await sendMessage(newTitleText, newDescription, newTag, user.name, user.verified_email, user.pid, user.sub);
    }
    const [userId, setUserId] = useState(null);
    const storeUser = useMutation("storeUsers");
    console.log("str");
    console.log(user);
    // Call the `storeUser` mutation function to store
    // the current user in the `users` table and return the `Id` value.
    useEffect(() => {
      // Store the user in the database.
      // Recall that `storeUser` gets the user information via the `auth`
      // object on the server. You don't need to pass anything manually here.
      async function createUser() {
        const id = await storeUser();
        setUserId(id);
      }
      createUser();
      return () => setUserId(null);
    }, [storeUser]);
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
          <span>Welcome, {user.name}!</span>
        </p>
        <div className = "card-container">
          {messages.map(message => (
             (message.pid == user.sub) ?
            <div key={message._id.toString()}>
              <div className = "card">
              <div className="card-body">
              Title: {message.title}<br></br>
              Tags: {message.tag}
              <br></br>
              Description: {message.description}<br></br>
              Author: {message.author}
              <br></br>
              Email: {message.email}
              <br></br>
              This is one of your listings!
              </div>
          </div>
            </div> :
            <div key={message._id.toString()}>
            <div className = "card">
            <div className="card-body">
            Title: {message.title}<br></br>
            Tags: {message.tag}
            <br></br>
            Description: {message.description}<br></br>
            Author: {message.author}
            <br></br>
            Email: {message.email}
            <br></br>
                  <>
                    <button onClick={handleShow}>
                      Offer
                    </button>
              <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>What do you want to offer?</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>{messages.filter( s =>s.pid == user.sub).map(s => (
            <div key={s._id.toString()}>
              <div className = "card">
              <div className="card-body">
              Title: {s.title}<br></br>
              Tags: {s.tag}
              <br></br>
              Description: {s.description}<br></br>
              Author: {s.author}
              <button 
              onClick={async () => {
                await addOffer(message.pid,s.pid,message._id,s._id,message.title, message.description, message.tag, message.author, s.title, s.description, s.tag, s.author, message.email, s.email);
                handleClose();
              }
              }>Offer</button>
              </div>
          </div>
            </div>
            
          ))}</Modal.Body>
                      <Modal.Footer>
                      </Modal.Footer>
                    </Modal>
                  </>
          
          
          
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
            <li className="nav-item">
              <LogoutButton/>
            </li>
          </ul>
         </div>
      </nav>
      </main>
    );
  }

  export default forum;