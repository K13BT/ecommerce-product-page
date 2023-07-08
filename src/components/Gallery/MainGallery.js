import React, { useContext } from 'react'
import product from '../productList'
import { GalleryContext } from './ProductGallery'

const MainGallery = () => {
  const {img: {imgSmall}, img: {imgLarge}} = product
  const {onShowModal, currentImg, setCurrentImg} = useContext(GalleryContext)

  return (
    <section className='main-gallery'>
        <div className='main-img'>   
          <button onClick={() => onShowModal(true, currentImg)}>
            <img src={imgLarge[currentImg]} />  
          </button>         
        </div>
        
        <div className='products-thumbnails'>
          {imgSmall.map((img, index) => (
            <button 
            key={index}  
            onClick={() => setCurrentImg(index)}
            style={{
              border: (index === currentImg) && '3px solid hsl(26, 100%, 55%)',
              borderRadius: (index === currentImg) && '10px'
            }}>
              <img src={img} style={{opacity: (index === currentImg) && 0.4}}/>
            </button>
          ))}
        </div>      
    </section>
  )
}

export default MainGallery