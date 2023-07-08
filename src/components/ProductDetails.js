import React, { useContext, useState } from 'react'
import minus from '../images/icon-minus.svg'
import plus from '../images/icon-plus.svg'
import { Context } from '../App'
import product from './productList'
import { ReactComponent as Cart } from '../images/icon-cart.svg'

const ProductDetails = () => {
    const [count, setCount] = useState(0)

    const {addItem} = useContext(Context)

    const onAddToCart = (name, price, count, img) => {
        const newItem = {
            name, 
            price: price.toFixed(2), 
            count, 
            total: (price * count).toFixed(2),
            img
        }

        addItem(newItem)
    }

  return (
    <section className='product-details'>
        <h5>{product.companyName}</h5>
        <h1>{product.productName}</h1>
        <p>{product.summary}</p>
        <div className='price'>
            <span className='final-price'>${(product.price).toFixed(2)}</span>
            <span className='discount'>{product.discount}%</span>
            <s className='og-price'>${product.ogPrice.toFixed(2)}</s>
        </div>
            <div className='counter'>
                <button onClick={() => setCount(count - 1)}><img src={minus} /></button>
                <span>{count}</span>
                <button onClick={() => setCount(count + 1)}><img src={plus} /></button>
            </div>
            <button onClick={() => onAddToCart(product.productName, product.price, count, product.img.imgSmall[0])} className='addToCartBtn'>
                <Cart style={{fill: '#fff', marginRight: '10px'}} className='cart-img' />
                Add to cart
            </button>     
    </section>
  )
}

export default ProductDetails