import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Example from "./components/Example";
import Eventhandle from "./components/Eventhandle";
import Greeting from "./components/Greeting";
import Userprofile from "./components/Userprofile";
import Hook from "./components/Hook";
import TableComponent from "./components/TableComponent";
import DataFetching from "./components/DataFetching";
import Axioscall from "./components/Axioscall";
import MaterialComponent from "./views/MaterialComponent";
import GridComponent from "./views/GridComponent";
import ResponsiveGrid from "./views/ResponsiveGrid";
import NestedGrid from "./views/NestedGrid";
import CustomerComponent from "./components/CustomerComponent ";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login/logout
  // const toggleLogin = () => {
  //   setIsLoggedIn(!isLoggedIn);
  // };

  const userInfo = {
    name: "John Doe",
    age: 28,
    email: "john.doe@example.com",
  };

  // -----------------------------------------------------------------------------------
  const columnKeys = ["name", "age", "occupation"];
  const columns = ["Name", "Age", "Occupation"];

  const data = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 30, occupation: "Designer" },
    { name: "Charlie", age: 35, occupation: "Teacher" },
  ];

  const tableAttributes = {
    border: "1",
    cellPadding: "10",
    cellSpacing: "0",
  };

  return (
    <div>
      {/* <Example /> */}

      {/* <Eventhandle /> */}
      {/* <DataFetching/> */}
      {/* <Axioscall/> */}

      {/* <div>
        <Greeting name="Alice" />
        <Greeting name="Bob" />
      </div> */}

      {/* <Userprofile user={userInfo} /> */}

      {/* <Hook/> */}

      {/* <TableComponent
        columns={columns} 
        columnKeys={columnKeys}  
        data={data}  
    
      /> */}

      {/* <MaterialComponent /> */}
      {/* <GridComponent/> */}
      {/* <ResponsiveGrid/> */}
        {/* <NestedGrid/> */}
      <CustomerComponent/>
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
