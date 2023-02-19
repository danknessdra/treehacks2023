
import { useAuth0} from "@auth0/auth0-react";
import { useQuery, useMutation } from "../convex/_generated/react";
import {Link} from 'react-router-dom';
const mylistings = () =>{
    const { user } = useAuth0();
    const messages = useQuery("listMessages") || [];
    const deleteMessage = useMutation("deleteMessage");
    if(messages == null) {
      return(<main>
        <div className = "center msg">
          You don't have any listings - Make some!
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
      </main>)
    }
    else {
      return(<main>
        <div className = "card-container">
          {messages.filter( message =>message.pid == user.sub).map(message => (
            <div key={message._id.toString()}>
              <div className = "card">
              <div className="card-body">
              Title: {message.title}<br></br>
              Tags: {message.tag}
              <br></br>
              Description: {message.description}<br></br>
              Author: {message.author}
              <button onClick={async () => {await deleteMessage(message._id);} }>Delete</button>
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
      </main>)
    }
        
    }
    export default mylistings;