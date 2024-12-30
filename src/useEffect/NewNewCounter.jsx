import React, { useEffect, useState } from 'react'

function NewNewCounter() {
 const [value,setValue] = useState(0)
 const [secondValue,setSecondvalue] = useState(0)

 useEffect(()=>{
    console.log("first value updated");
    
 },[value])

 useEffect(()=>{
    console.log("second value updated");
    
 },[secondValue])


    const clickHandler = ()=>{
        setValue(value +1)
    }

    const secondHandler = ()=>{
        setSecondvalue(secondValue+1)
    }
  return (
    <div>
        <h1>count : {value}</h1>
        <button onClick={clickHandler}>increment</button>
        <h1>Value:{secondValue}</h1>
        <button onClick={secondHandler}>increment</button>
    </div>
  )
}

export default NewNewCounter