import React, { useState } from 'react'

function ErrorExample() {
    const[value,setValue] = useState(0)
const clickHandler = ()=>{
    setValue(value+1)
}
function sayhello(){
    console.log("hello from function");
    
}
sayhello()
  return (
    <div>
        <h1>value:{value}</h1>
        <button onClick={clickHandler}>Click me</button>
    </div>
  )
}

export default ErrorExample