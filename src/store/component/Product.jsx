import React from 'react'
import './product.css'

const Product = ({details}) => {
  return (
    <div className='product-list'>
        {details.map((item)=>{
            return (
              <div>
                <h3>{item.name}</h3>
                <p>Price:{item.price}</p>
                <p>{item.description}</p>
                <button>Buy Now</button>
              </div>
            )
        })}
    </div>
  )
}

export default Product