import React  from "react";
import { useState,useEffect } from 'react'

function Fetch() {

    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then((data=>{console.log(data)
        setData(data)}
        ))

    },[])


  return (
    <div>
        {data.map((item)=>{
            return(
                <div>
                    <h1>{item.body}</h1>
                    <h3>{item.title}</h3>
                </div>
            )
        })}
    </div>
  )
}

export default Fetch