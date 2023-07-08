import React, { useContext, useState } from 'react'
import {ReactComponent as CartBtn} from '../images/icon-cart.svg'
import { Context } from '../App'
import deleteBtn from '../images/icon-delete.svg'

const Cart = () => {
  const [showCart, setShowCart] = useState(false)

  const {state, deleteItem}= useContext(Context)

  return (
    <div className='cart'>
        <button onClick={() => setShowCart(showCart => !showCart)} className='cart-btn'>
          <CartBtn className='cart-img' />
          {(state.count > 1) && <span className='count'>{state.count}</span>}
        </button>     

        {showCart && (
          <div className='open-cart'>
            <h3>Cart</h3>
            {
              ((Object.keys(state).length === 0) || (state.count < 1)) ? (                  
                  <p className='empty-cart'>Your cart is empty.</p>
              ) : (
                <div className='cart-items'>
                  <div className='cart-item'>
                    <img src={state.img} className='product-img'/>
                    <div>
                      <p>{state.name}</p>
                      <span>${state.price} x {state.count}</span> 
                      <span className='total'>${state.total}</span>
                    </div>
                    <button onClick={() => deleteItem()}><img src={deleteBtn} /></button>
                  </div>
                  <button className='checkout'>Checkout</button>
                </div>
              )
            }
          </div>
        )}
    </div>
  )
}


export default Cart