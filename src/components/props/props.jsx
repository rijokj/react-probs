import React from 'react'

const Props = ({details}) => {
  return (
    <div>
        {details.map((items)=>{
            return(
                <div>
                    <h1>{items.name}</h1>
                    <h3>{items.age}</h3>
                </div>
            )
        })}
    </div>
  )
}

export default Props