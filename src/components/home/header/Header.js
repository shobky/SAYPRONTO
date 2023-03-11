import React from 'react'
import './header.css'
import { TbMenu } from 'react-icons/tb'

const Header = () => {
    return (
        <div className='home_header'>
            <h1 className='home_header_name'>SAYPRONTO</h1>
            <TbMenu className='home_header_menu-ico'/>
        </div>
    )
}

export default Header