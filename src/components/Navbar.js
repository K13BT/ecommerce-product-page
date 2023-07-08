import React, { useState } from 'react'
import Cart from './Cart'
import logo from '../images/logo.svg'
import { ReactComponent as MenuBtn } from '../images/icon-menu.svg'
import { ReactComponent as CloseBtn } from '../images/icon-close.svg'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <header className='desktop-nav'>       
        <img src={logo} className='logo'/>
        <nav>
          <a href='#'>Collections</a>
          <a href='#'>Men</a>
          <a href='#'>Women</a>
          <a href='#'>About</a>
          <a href='#'>Contact</a>
        </nav>
        <Cart />
        <a href='#' className='avatar-link'><img src={require('../images/image-avatar.png')} className='avatar' /></a>
      </header>
      <div className='mobile-nav'>
        <header>
          <button onClick={() => setShowMenu(showMenu => !showMenu)} className='menu-btn'>
            <MenuBtn className='menu-img' />
          </button>
          <img src={logo} />
          <Cart />
          <a href='#' className='avatar-link'><img src={require('../images/image-avatar.png')} className='avatar' /></a>
        </header>
          
        <div className='menu-wrapper' style={{display: showMenu ? 'unset' : 'none'}}>
          <div className='menu'>
            <button onClick={() => setShowMenu(showMenu => !showMenu)}>
              <CloseBtn className='close-img' />
            </button>
            <menu>
              <a href='#'>Collections</a>
              <a href='#'>Men</a>
              <a href='#'>Women</a>
              <a href='#'>About</a>
              <a href='#'>Contact</a>
            </menu>
          </div>
        </div>
          
          
      </div>
    </>
  )
}

export default Navbar