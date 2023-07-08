import { useContext } from 'react'
import {ReactComponent as NextBtn} from '../../images/icon-next.svg'
import {ReactComponent as PrevBtn} from '../../images/icon-previous.svg'
import product from '../productList'
import { GalleryContext } from './ProductGallery'

const Slideshow = () => {
  const {img: {imgLarge}} = product

  const {currentImg, onPrevClick, onNextClick} = useContext(GalleryContext)

  return (
    <div className='slideshow'>
      <img src={imgLarge[currentImg]} />
      <button className='prev-btn' onClick={onPrevClick}>
        <PrevBtn className='prev-img' />
      </button>
      <button className='next-btn' onClick={onNextClick}>
        <NextBtn className='next-img' />
      </button>
    </div>
  )
}

export default Slideshow