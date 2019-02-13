import { slide as HambergerMenu } from 'react-burger-menu'
import { NavItem } from './NavItem'

import React from 'react'

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '25px',
    height: '25px',
    left: '36px',
    top: '25px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    marginTop: '40px',
    color: '#fff',
    fontWeight:'800',
    padding: '0.8em'
  },

  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

export default class HambergerNav extends React.Component {
  state = {
    isOpen: false,
  }

  componentDidMount() {
    window.onscroll = this.closeHamberger
  }
  
  closeHamberger = () => {
    this.setState({ isOpen: false })
  }

  render() {
    return(
      <HambergerMenu width="250px" isOpen={this.state.isOpen} styles={styles}>
        <div className='hamberger'>
          <NavItem name='landing'>
            <img src="/logo.png" alt="KMUTNB CSDAY 2018" width="80px" onClick={this.closeHamberger}/>
          </NavItem>
          <NavItem name='date'>
            <p onClick={this.closeHamberger}>date & Time</p>
          </NavItem>
          <NavItem name='detail'>
            <p onClick={this.closeHamberger}>detail</p>
          </NavItem>
          <NavItem name='location'>
            <p onClick={this.closeHamberger}>location</p>
          </NavItem>
        </div>
      </HambergerMenu>
    )
  }
}