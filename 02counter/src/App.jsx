import { useState } from 'react'
import './App.css'

function App() {
//  let counter=15
const [counter,setcounter]=useState(15)
// first value is variable
// second is method or function
// u can keep const becaiuse new state is given to u 
 const addValue=()=>{
  setcounter(counter+1)
 }
 const decValue=()=>{
  setcounter(counter-1)
 }
// const addValue=()=>{
//   setcounter((prevcounter)=>{prevcounter+1}); variable can be any name prevcounter or anything else 
//   setcounter((prevcounter)=>{prevcounter+1});
//   setcounter((prevcounter)=>{prevcounter+1});
//   setcounter((prevcounter)=>{prevcounter+1});
// }
// this method can be used to avoid batching where u use previous counter to update 
  return (
    <>
      <h1>React course with friends {counter}</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={decValue}>Remove Value</button>
      <p>Footer : {counter}</p>
    </>
  )
}

export default App
