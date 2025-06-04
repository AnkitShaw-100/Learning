import React, { useState } from 'react';
import './App.css';

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [result, setResult] = useState("0");

  function calculateBMI(e) {
    e.preventDefault();
    const bmi = (weight / (height * height) * 10000);
    console.log(bmi);

    setBmi(bmi);
    if (bmi < 18) {
      console.log("Under Weight");
      setResult("UnderWeight");
    }
    else if (bmi > 18 && bmi < 25) {
      console.log("Normal");
      setResult("Normal");
    }
    else {
      console.log("Over weight");
      setResult("OverWeight");
    }
  }

  return (
    <>
      <form onSubmit={calculateBMI}>

        <div>
          <label htmlFor="height-input">Height</label>
          <input
            onChange={(e) => {
              setHeight(e.target.value);
              if (e.target.value <= 0) {
                alert("Invalid Input");
              }
              console.log(e.target.value);
            }}
            className='height-input'
            type="number"
            placeholder='Enter your height (in cm)'
          />
        </div>

        <div>
          <label htmlFor="weight-input">Weight</label>
          <input onChange={(e) => {
            setWeight(e.target.value);
            if (e.target.value <= 0) {
              alert("Invalid Input");
            }
            console.log(e.target.value);
          }}
            className='weight-input'
            type="number"
            placeholder='Enter you weight (in kg)'
          />
        </div>

        <div>
          <p className='result'>Result : {result}</p>
          <button onClick={calculateBMI} className='submit-button'>Sumbit</button>
        </div>

      </form>
    </>
  )
}

export default App;
