import './App.css'
import { use, useState } from 'react'

function App() {

  const [counter, setCounter] = useState(15)

  // let counter = 15
  const addValue = () => {
    // counter += 1
    // console.log("Counter value after addition: ", counter)

    // setCounter(counter+1)

    // concept of batching
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)


    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
  }
  const subValue = () => {
    // counter -= 1
    // console.log("Counter value after subtraction: ", counter)
    setCounter(counter-1)
  }

  return (
    <>
    <h1>Hey Can you count the numbers ? {counter}</h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={addValue}>Add Value</button> {" "}
    <button onClick={subValue}>Remove Value</button>
    <p>footer : {counter} </p>
    </>
  )
}

export default App
