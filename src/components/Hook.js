import { useState } from "react";

const Hook = ()=>{

    const [count, setCount] = useState(0);

    const btnClick = ()=>{
      setCount(count+1);
    }
    return(
        <div>
        <p>You clicked {count} times</p>
        {/* <button onClick={() => setCount(count + 1)}> */}
        <button onClick={btnClick}>
          Click me
        </button>
      </div>

    )


}

export default Hook;