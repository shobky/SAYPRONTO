import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import './nav.css'

import { AiOutlineMenu } from 'react-icons/ai'
import { IoCloseOutline } from 'react-icons/io5'


const Nav = ({ handleActivePage, activePage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate = useNavigate()
    const openMenu = () => {
        setIsMenuOpen(true)
    }
    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <div className='header-container'>
            <h1 onClick={() => navigate('/')}>SAYPRONTO</h1>
            <div className='plus1036-display-none'>    {
                isMenuOpen ?
                    <IoCloseOutline onClick={closeMenu} className='nav-menu-btn_close' />
                    :
                    <AiOutlineMenu onClick={openMenu} className='nav-menu-btn' />
            }</div>
            <nav className={isMenuOpen ? 'nav-container-show' : 'nav-container'}>
                <div className='plus1036-display-none'>
                    <a href='/#home' className='nav-link' onClick={() => setIsMenuOpen(false)}>Home</a>
                </div>
                <a onClick={() => setIsMenuOpen(false)} className='nav-link' href='#benefits'>benefits</a>
                <a onClick={() => setIsMenuOpen(false)} className='nav-link' href='#services'>Services</a>
                <a onClick={() => setIsMenuOpen(false)} className='nav-link' href='#plans'>memberships</a>
                <a onClick={() => setIsMenuOpen(false)} className='nav-link' href='#benefits'>Work</a>
                <a onClick={() => setIsMenuOpen(false)} className='nav-link' href='#benefits'>Use Cases</a>
                <a onClick={() => setIsMenuOpen(false)} className='nav-link' href='#benefits'>FAQs</a>
            </nav >
        </div >
    )
}

export default Nav