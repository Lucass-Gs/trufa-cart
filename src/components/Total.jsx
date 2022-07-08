import React from 'react'
import './Total.css'

const Total = ({ Results }) => {
      var total_price = Results?.reduce((total, item) => total += (item.quantity * item.sellingPrice), 0).toFixed(2)
      return (
            <div className='total-container'>
                  <div className='total'>
                        <h2> Total: </h2>
                        <h2> R${total_price}</h2>
                  </div >
                  {total_price > 10.0 && (
                        <div className='free-shipping'>
                              <p>Parabéns, sua compra tem frete grátis !</p>
                        </div>
                  )}
            </div>
      )
}

export default Total