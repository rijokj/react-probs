import React, { use, useState } from "react";

function NewCounter() {

    const [value,setValue] = useState(0)
    const clickHandler = ()=>{
        setValue(value +1)
    }

    const secondHandler = ()=>{
        setValue(value-1)
    }
  return (
    <div>
        <h1>count : {value}</h1>
        <button onClick={clickHandler}>increment</button>
        <button onClick={secondHandler}>decrement</button>
    </div>
  )
}

export default NewCounter