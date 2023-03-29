import React from 'react'
import './header.css'
import { BiMenu } from 'react-icons/bi'

const Header = () => {
    return (
        <div id='header' className='home_header'>
            <a style={{ textDecoration: "none", color: "inherit" }} href='#hero'> <h1 className='home_header_name'>SAYPRONTO</h1></a>
            {
                window.innerWidth >= 742 ?
                    <div className='navigation__desktop'>
                        <a herf="#benefits">Benefits</a>
                        <a herf="#">Work</a>
                        <a herf="#services">Services</a>
                        <a herf="#">Use Cases</a>
                        <a herf="#">Comaare</a>
                        <a herf="#">Reviews</a>
                        <a herf="#">aricing</a>
                        <a herf="#">FAQs</a>
                    </div>
                    :
                    <BiMenu className='home_header_menu-ico' />

            }
        </div>
    )
}

export default Header