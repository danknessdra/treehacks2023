
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "../convex/_generated/react";
import {Link} from 'react-router-dom';
import { useAuth0} from "@auth0/auth0-react";

const offers = () =>{
    const {user} = useAuth0();
    
    const [name, setName] = useState(user.name);
    const [phone, setPhone] = useState("");
    const [description, setDesc] = useState("");


    const userData = useQuery("listUser") || [];

   
   
    

      return(<main>

        <h1>Name</h1>
        <br></br>
        <input value={name} placeholder={name}></input>
        <br></br>
        <h1>Phone Number</h1>
        <br></br>
        <input value={phone} placeholder={phone}></input>
        <br></br>
        <h1>Description</h1>
        <br></br>
        <input value={description} placeholder={description}></input>

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