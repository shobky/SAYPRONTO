import React from 'react'
import './header.css'
import { RiMenu4Line } from 'react-icons/ri'

const Header = () => {
    return (
        <div id='header' className='home_header'>
            <a style={{textDecoration:"none", color:"inherit"}} href='#hero'> <h1 className='home_header_name'>SAYPRONTO</h1></a>
            <RiMenu4Line className='home_header_menu-ico' />
        </div>
    )
}

export default Header