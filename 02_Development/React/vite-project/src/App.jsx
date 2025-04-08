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


// import React, { useEffect, useState, useRef } from 'react'

// const App = () => {
//   const [name, setName] = useState("");
//   const count = useRef(0);

//   useEffect(() => {
//     // setCount((prev) => prev + 1);
//     count.current = count.current + 1;
//   })

//   return (
//     <div>
//       <input type="text" onChange={(e) => setName(e.target.value)} />
//       <h2>Name : {name}</h2>
//       <h2>Renders : {count.current}</h2>
//     </div>
//   )
// }

// export default App









// useReducer -> is used to manage state in our react application, in other words, useReducer works like a state management tool
// statemanagement is used to manage all states of application in a simple way 
// Always use the use redcuer hook when you have a lot of states and methods to handle 

// import React, { useState, useReducer } from "react";

// const initialState = {count: 0}

// const reducer = (state, action) => {
//   // console.log(action);
//   switch(action.type){
//     case "increase":
//     return {count: state.count + 1}

//     case "decrease":
//     return {count: state.count - 1}

//     default: 
//     return state;
//   }
// }
// const App = () => {
//   // const [count, setCount] = useState(0);
//   // same as useState [variable, function]
//   const[state, dispatch] = useReducer(reducer, initialState)

//   const increaseCount = () => {
//     // setCount((prev) => prev + 1);
//     dispatch({type: "increase"})
//   }

//   const decreaseCount = () => {
//     // setCount((prev) => prev - 1);
//     dispatch({type: "decrease"})
//   }

//   return(
//     <div>
//       <h2>Count : {state.count}</h2>
//       <button onClick={increaseCount}>Increase</button>
//       <button onClick={decreaseCount}>Decrease</button>
//     </div>
//   )
// }

// export default App









// useLayoutEffect -> most common use of case of useLayoutEffect is to get the dimension of the layout 
// that's why it's name is useLayoutEffect

// import React, {useState, useEffect} from 'react'
// import { useLayoutEffect ,useRef} from 'react';

// const App = () => {
//   const [toggle, setToggle] = useState(false);
//   const textRef = useRef();

//   // Despite where we wrtite useLayoutEffect it will run first than useEffect Flow of execution will be  React claculates this components -> useLayoutEffect -> React prints all elements -> useEffect  
//   useEffect(() => {
//     // console.log("useEffect")
//     if(textRef.current != null){
//       const dimension = textRef.current.getBoundingClientRect();
//       textRef.current.style.paddingtop=`${dimension.height}px`
//     }
//   }, [toggle]);

//   useLayoutEffect(() => {
//     console.log("useLayoutEffect")
//   }, [toggle])
  
//   return (
//     <div>
//       <button onClick={() => setToggle(!toggle)}>Toggle</button>
//       {toggle && <h4>Ankit bless you</h4>}    
//     </div>
//   )
// }

// export default App









// useCallback is used to return memoize function
// it's also useful for preventing functions from being re-created on re-rendering

// import React, { useState, useEffect, useCallback } from 'react';

// const PrintTable = React.memo(({ calculateTable }) => {
//   const [table, setTable] = useState([]);

//   useEffect(() => {
//     setTable(calculateTable());
//   }, [calculateTable]);

//   return (
//     <ul>
//       {table.map((value, index) => (
//         <li key={index}>{value}</li>
//       ))}
//     </ul>
//   );
// });

// const App = () => {
//   const [number, setNumber] = useState("0");
//   const [darkTheme, setDarkTheme] = useState(false);

//   const cssStyle = {
//     backgroundColor: darkTheme ? 'Black' : 'White',
//     color: darkTheme ? 'White' : 'Black',
//   };

//   const calculateTable = useCallback(() => {
//     return [number * 1, number * 2, number * 3, number * 4, number * 5];
//   }, [number]);

//   return (
//     <div style={cssStyle}>
//       <input
//         onChange={(e) => setNumber(e.target.valueAsNumber || 1)}
//         type="number"
//         value={number}
//       />
//       <PrintTable calculateTable={calculateTable} />
//       <button onClick={() => setDarkTheme((prev) => !prev)}>Toggle</button>
//     </div>
//   );
// };

// export default App;









// custom hooks are basically a reusable function
// in simple words custom hooks are your own hooks thaty you create for your own use and can use them multiple times in your project

// import React, {useEffect, useState} from 'react'
// import useFetch from "./useFetch"

// const App = () => {
//   const data = useFetch("https://jsonplaceholder.typicode.com/users")
//   return (
//     <>
//       {data.map((res) => {
//         return(
//           <h4 key={res.id}>
//             {res.id}.{res.name}
//           </h4>
//         );
//       })}
//     </>
//   )
// }

// export default App









// Axios is a package used to make HTTP requests(calling am API) from the browser n an easy and better way 
// We can say, Axios is the upgraded version of fetch method
// Almost 70% of react users use Axios to make HTTP requests for backend like NodeJS
// Advantages of  using AXIOS
// -> By default use JSON format
// -> Need to use only one then()
// -> Provide all types of HTTP methods
// -> Better error handling