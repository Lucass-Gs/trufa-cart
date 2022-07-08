import React from 'react'

import './ItensCart.css'

const ItensCart = ({ Results }) => {
      return (
            <div className='card-container'>
                  {Results?.map(results => (
                        <div className='item-card' key={results.id} >
                              <img className='image' src={results.imageUrl} alt='mage'></img>
                              <div className="text-info">
                                    <p>{results.name}</p>
                                    <p className='old-price'>R${results.price}</p>
                                    <p>R${results.sellingPrice}</p>
                              </div>
                        </div>
                  ))}
            </div>
      )
}

export default ItensCart