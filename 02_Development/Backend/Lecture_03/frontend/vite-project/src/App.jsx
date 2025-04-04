import {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const[jokes, setJokes] = useState([])

  useEffect(() =>{
    axios.get('http://localhost:3000/api/jokes')
    .then((response) => {
      console.log(response.data)
      setJokes(response.data)
    })
    .catch((error) => {
      console.error("Error fetching jokes:", error.message)
    })
  },[])

  return (
    <>
      <h1>Ankit</h1>
      <p>Jokes : {jokes.length}</p>
      {jokes && jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.tile}</h3>
            <p>{joke.content}</p>
          </div>
        ))}
    </>
  )
}

export default App
