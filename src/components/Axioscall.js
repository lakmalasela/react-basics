import { useState, useEffect } from "react";
import axios from 'axios';

const Axioscall = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Optional: to handle loading state

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log("RES ",response);
      
      
      setData(response.data);  // Set the fetched data
    } catch (error) {
      setError(error.message); // Capture error message
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  // useEffect to call fetchData when the component mounts
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means it runs once when the component mounts

  // Conditional Rendering
  return (
    <div>
      <h2>User Posts</h2>
      {loading ? ( // Check if loading
        <p>Loading...</p> // Loading state
      ) : error ? ( // Check if there is an error
        <p>Error: {error}</p> // Error state
      ) : ( // Render data when neither loading nor error
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Axioscall;
