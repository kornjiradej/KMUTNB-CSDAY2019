import React from 'react'
import { Link } from 'react-scroll'

export const NavItem = (props) => {
  return (
    <Link 
      activeClass="active"
      spy={true} smooth={true} duration={500}
      to={`scroll-${props.name}`}
      className='nav-item'
    >
      {props.children}
    </Link>
  )
}