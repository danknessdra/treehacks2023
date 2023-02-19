
import { useAuth0} from "@auth0/auth0-react";
import { useQuery } from "../convex/_generated/react";
import {Link} from 'react-router-dom';
import Arrow from '../images/biarrow.jpg';
const offers = () =>{
    const offers = useQuery("listOffers") || [];
    const messages = useQuery("listMessages") || [];
    const { user } = useAuth0();
    return(<main>
      {/* i am so tired - raymond */}
        {offers.filter( s =>s.auth1 == user.sub).map(s => (
          <div className = "theContainer">

            <div className = "card">
              <div className="card-body">
              Title: {s.title1}<br></br>
              Tags: {s.tag1}
              <br></br>
              Description: {s.description1}<br></br>
              Author: {s.author1}
              <br></br>
              Email: {s.email1}
              </div>
          </div>
          <img src = {Arrow}></img>
          <div className = "card">
              <div className="card-body">
              Title: {s.title2}<br></br>
              Tags: {s.tag2}
              <br></br>
              Description: {s.description2}<br></br>
              Author: {s.author2}
              <br></br>
              Email: {s.email2}
              </div>
          </div>
          </div>
            
          ))}

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
    export default offers;