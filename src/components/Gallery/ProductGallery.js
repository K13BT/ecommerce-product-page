import React, { createContext, useState } from 'react'
import product from '../productList'
import MainGallery from './MainGallery'
import Slideshow from './Slideshow'
import Lightbox from './Lightbox'

export const GalleryContext = createContext()

const ProductGallery = () => {
  const [currentImg, setCurrentImg] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const {img: {imgLarge}} = product

  const onShowModal = (value, index) => {
    setShowModal(value)
    setCurrentImg(index)
  }
  
  const onPrevClick = () => {
    if (currentImg > 0) {
      setCurrentImg(currentImg => currentImg - 1)
    } else {
      setCurrentImg(imgLarge.length - 1)
    }
  }

  const onNextClick = () => {
  if (currentImg < imgLarge.length - 1) {
      setCurrentImg(currentImg => currentImg + 1)
  } else {
      setCurrentImg(0)
  }
  }

  return (
    <GalleryContext.Provider value={{onShowModal, currentImg, setCurrentImg, onNextClick, onPrevClick}}>
      <MainGallery/>  
      {showModal && 
      <Lightbox />}
      <Slideshow />
    </GalleryContext.Provider>
  )
}

export default ProductGallery