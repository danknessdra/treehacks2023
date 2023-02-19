
import { useState } from "react";
import { useMutation, useQuery } from "../convex/_generated/react";
import {Link} from 'react-router-dom';
import LoginButton from "./loginButton";
import "./login.css";
const login = () =>{


return(

<div className="loginContainer"> <LoginButton/>
</div>

)
    
}


export default login;