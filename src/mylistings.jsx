
import { useAuth0} from "@auth0/auth0-react";
import { useQuery, useMutation } from "../convex/_generated/react";
import {Link} from 'react-router-dom';
const mylistings = () =>{
    const { user } = useAuth0();
    const messages = useQuery("listMessages") || [];
    const deleteMessage = useMutation("deleteMessage");
    return(<main>
        <div className = "card-container">
          {messages.filter(message => message.pid == user.sub).map(message => (
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
    export default mylistings;