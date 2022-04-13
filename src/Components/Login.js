import React,{useState} from "react";
import "./Login.css"
import TestLogin from "./TestLogin"
//added simple comment


const Login = () => {

  const [currentFName, setFName] = useState("");
  const [currentLName, setLName] = useState("");

  // use this boolean to check if the user entered something
  const [isFNameValid, setIsFNameValid] = useState(true);
  const [isLNameValid, setIsLNameValid] = useState(true);

  function handleFirstNameInput(event){
    setFName(event.target.value);
    //console.log(currentFName);
  };

  function handleLastNameInput(event){
    setLName(event.target.value);
    //console.log(currentLName);
  };

  /*
    Make sure users enter something inside of the input.
    Display error to user in case something essential is missing.
  */
  function handleLoginSubmit(event){
    event.preventDefault();
    if(currentFName.trim().length === 0 && currentLName.trim().length === 0 ){
      setIsFNameValid(false);
      setIsLNameValid(false);
      return;
    }
    else if(currentFName.trim().length === 0 ){
      setIsFNameValid(false);
      return;
    }else if (currentLName.trim().length === 0) {
      setIsLNameValid(false);
      return;
    }
    setIsFNameValid(true);
    setIsLNameValid(true);
    console.log("it is working!" + " " + "The Name is: " +
         currentFName + " " + "The Last Name is: " + currentLName)
  }

return (
  <div className='main_login_box'>
     <div className='login_hello'>
       <h1>Login for an Epic Journey!</h1>
     </div>
    <form className="login_controls" onSubmit={handleLoginSubmit}>
        <div>
         <input
            type='text'
            placeholder={isFNameValid ? 'First Name' : 'Please enter a First Name!'}
            style ={{color: isFNameValid ? 'black' : 'red'}}
            onChange={handleFirstNameInput}/>
        </div>
        <div>
        </div>
        <div>
         <input
           type='text'
           placeholder={isLNameValid ? 'Last Name' : 'Please enter a Last Name!'}
           style ={{color: isLNameValid ? 'black' : 'red'}}
           onChange={handleLastNameInput}/>
        </div>
        <button
           type='submit'
           className='login_button'>Login</button>
      </form>
    </div>
  );
}

export default Login;
