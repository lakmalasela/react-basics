import { useState } from "react";

const Eventhandle = ()=>{

    const [count, setCount] = useState(0);

  // Function to handle button click
  const handleClick = () => {
    setCount(count + 1);
  };

  const [inputValue, setInputValue] = useState('');

  // Function to handle input change
  const handleInputChange = (event) => {
    console.log("Event is ",event);
    
    setInputValue(event.target.value);
  };

    return(
        <div className="App">
      <h1>Count: {count}</h1>
      {/* Event handler for button click */}
      <button onClick={handleClick}>Click me</button>

      <br></br>

      <h1>Input Value: {inputValue}</h1>
      {/* Event handler for input changes */}
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Type something" 
      />
    </div>
    )

}

export default Eventhandle;