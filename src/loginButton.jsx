import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton() {
  const { isLoading, loginWithRedirect, error, logout } = useAuth0();

  // Check if there's an error and set the button text accordingly
  let buttonText = "Log in";
  if (error) {
    buttonText = "Error: " + error.message;
    logout({ returnTo: window.location.origin });
   
   

  }
  

  return (
    <button disabled={isLoading} onClick={loginWithRedirect}>
      {buttonText}
    </button>

  );
}
