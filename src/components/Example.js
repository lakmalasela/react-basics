const Example = ()=>{

    const currentHour = new Date().getHours();

  // Determine the greeting based on the time of day
  let greeting;
  if (currentHour < 12) {
    greeting = "Good Morning!";
  } else if (currentHour < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }
  return (
    <div className="App">
      <h1>{greeting}</h1>
      <p>Hope you're having a great day!</p>
    </div>
  );

}

export default Example;