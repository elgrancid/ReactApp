import React,{useState} from "react";
import "./Login.css"
import TestLogin from "./TestLogin"
//added simple comment


const Login = () => {

  const [currentFName, setFName] = useState("");
  const [currentLName, setLName] = useState("");

  function handleFirstNameInput(event){
    setFName(event.target.value);
    //console.log(currentFName);
  };

  function handleLastNameInput(event){
    setLName(event.target.value);
    //console.log(currentLName);
  };

  function handleLoginSubmit(event){
    event.preventDefault();

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
         <input type='text' placeholder='First name' onChange={handleFirstNameInput}/>
        </div>
        <div>
         <input type='text' placeholder='Last name' onChange={handleLastNameInput}/>
        </div>
        <button type='submit' className='login_button'>Login</button>
      </form>
    </div>
  );
}

export default Login;
