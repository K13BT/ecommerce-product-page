import { useContext, useState } from 'react'
import {ReactComponent as NextBtn} from '../../images/icon-next.svg'
import {ReactComponent as PrevBtn} from '../../images/icon-previous.svg'
import { ReactComponent as CloseBtn } from '../../images/icon-close.svg'
import product from '../productList'
import { GalleryContext } from './ProductGallery'

const Lightbox = () => {
    const {img: {imgSmall}, img: {imgLarge}} = product

    const {currentImg, setCurrentImg, onShowModal, onPrevClick, onNextClick} = useContext(GalleryContext)

    return (
      <div className='lightbox-wrapper'>
        <div className='lightbox'>
        <button className='close-btn' onClick={() => onShowModal(false, currentImg)}>
        <CloseBtn className='close-img' />
        </button>
        <div className='main-img'>
            <button className='prev-btn' onClick={onPrevClick}>
                <PrevBtn className='prev-img' />
            </button>
            <img src={imgLarge[currentImg]} className='main-img'/>
            <button className='next-btn' onClick={onNextClick} >
                <NextBtn className='next-img' />
            </button>
        </div>
        <div className='products-thumbnails'>
            {imgSmall.map((img, index) => (
            <button key={index} 
            style={{
                border: index === currentImg ? '3px solid hsl(26, 100%, 55%)' : 'none',
                borderRadius: index === currentImg && '10px',
              }}
            onClick={() => setCurrentImg(index)}>
                <img src={img} style={{ opacity: index === currentImg && 0.4}} />
            </button>
            ))}
        </div>
      </div>
      </div>
    )
}

export default Lightbox