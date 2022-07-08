import React, { useState, useEffect } from 'react'
import './Cart.css'
import ItensCart from './ItensCart'
import api from '../services/api'
import Total from './Total'

const Cart = () => {

      const [Results, setResults] = useState()
      useEffect(() => {
            api.get(`/items`)
                  .then(response => {
                        setResults(response.data)
                  }).catch(error => {
                        console.log(error)
                  })
      }, [])

      return (
            <div className='cart-container'>
                  <div className="header"> Meu carrinho</div>
                  <ItensCart Results={Results}></ItensCart>
                  <Total Results={Results} />
                  <button className='btsubmit'>Finalizar compra</button>
            </div>
      )
}

export default Cart