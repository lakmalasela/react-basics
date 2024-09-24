import { useEffect, useState } from "react";

const DataFetching = ()=>{

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData  = async()=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        const result = await response.json();
        setData(result);  // Set the fetched data
    }catch(error){
        setError(error.message);
    }
  }

  
//useEffect Hook
// useEffect(()=>{
//     fetchData()
// },[])

useEffect(()=>{
    fetchData()
},[])

return(
    <div>
        <h2>User posts</h2>
        {error ? ( <p>Error: {error}</p>): 
        (<ul>
            {data.map((item)=>(
                <li key={item.id}>{item.title}</li>
            ))}    
        </ul>)}
    </div>
)



}


// npm i axios --force

export default DataFetching;