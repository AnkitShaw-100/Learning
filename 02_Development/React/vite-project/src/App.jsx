// Hooks are the function that make (fucntional components work like Class components)
// useState hook is a fucntional to add State in fucntional Components
// State is nothing but just values or variables of your components

// --> const [state, setState] = useState(true);
// --> const [current  value, function] = default value; 

// import React from 'react'
// import { useState } from 'react';

// const App = () => {
//   // const array = useState(0);
//   // const counter = array[0];
//   // const setCounter = array[1];
//   const [counter , setCounter] = useState(0);
//   const [name, setName] = useState("");
//   const [details, setDetails] = useState({counter: 0, name: " "});


//   function increaseCounter() {
//     // setCounter(counter + 1);
//     setDetails({counter:  details.counter + 1});
//   }  

//   // console.log(array);
//   return (
//     <div>
//       <input type="text" onChange={e => setName(e.target.value)} />
//       <h1>{details.name} has clicked {details.counter} times !!</h1>
//       <button onClick={increaseCounter}>Increase</button>
//     </div>
//   )
// }

// export default App









// UseEffect is use to perform side effects in our component
// Side effects are actions which are performed with the "Outside world"
// Example of Side effect :  Fetching data from API, updating the DOM document and window Timer functions setTimeout & setInterval
// useEffect(callback, dependencies)

// import React from 'react'
// import { useState, useEffect } from 'react'

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [othercount, setOtherCount] = useState(5);

//   // useEffect without any dependency will run on evry change on the website 
//   useEffect(() => {
//     document.title = `${count} new messages!`;
//   })

//   // useEffect with an array dependency will run on only one change on reload 
//   useEffect(() => {
//     document.title = `${othercount} new messages!`;
//   }, [othercount]);

//   // useEffect with variable
//   return (
//     <div>
//       <h3>{count} new Messages !</h3>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <h3>Other Count: {othercount}</h3>
//       <button onClick={() => setOtherCount(othercount + 5)}>Increase</button>
//     </div>
//   )
// }

// export default App









// useContext is use to manage global data in react application
// It is done in 3  main steps -> 1. Creating the context, 2. Providing the context, 3. Consuming the context
// If you want to pass data just for Child components, then you can use props

// import React, { createContext } from 'react'

// export const loginContext = createContext();

// // next page maincomponent m import krke ek const variable m store krke console.log like below
// // import React, {useContext} from "react";
// // const login = useContext(LoginContext);
// // console.log(login);

// const App = () => {
//   return (
//     <loginContext.Provider value={true}>
//       <div>
//         <MainComponent />
//       </div>
//     </loginContext.Provider>

//   )
// }

// export default App










// useRef allows us to access DOM elements
// for creating mutable variables which will not re-render the components


import React, { useEffect, useState, useRef } from 'react'

const App = () => {
  const [name, setName] = useState("");
  const count = useRef(0);

  useEffect(() => {
    // setCount((prev) => prev + 1);
    count.current = count.current + 1;
  })

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h2>Name : {name}</h2>
      <h2>Renders : {count.current}</h2>
    </div>
  )
}

export default App
