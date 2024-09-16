import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Example from "./components/Example";
import Eventhandle from "./components/Eventhandle";
import Greeting from "./components/Greeting";
import Userprofile from "./components/Userprofile";
import Hook from "./components/Hook";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login/logout
  // const toggleLogin = () => {
  //   setIsLoggedIn(!isLoggedIn);
  // };


  const userInfo = {
    name: 'John Doe',
    age: 28,
    email: 'john.doe@example.com',
  };

  return (


    <div>
      {/* <Example />

      <Eventhandle /> */}

      {/* <div>
        <Greeting name="Alice" />
        <Greeting name="Bob" />
      </div> */}


      {/* <Userprofile user={userInfo} /> */}

<Hook/>

    </div>

    

    //   <div className="App">

    //   <h1>Conditional Rendering Example</h1>
    //   {/* Conditional rendering of message based on login status */}
    //   <p>{isLoggedIn ? 'Welcome back, User!' : 'Please log in.'}</p>


    //   {/* Conditional rendering of button label */}
    //   <button onClick={toggleLogin}>
        
    //     {isLoggedIn ? 'Logout' : 'Login'}
    //   </button>

    // </div>
  );
}

export default App;
