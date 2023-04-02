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
                    <Link to='/' className='nav-link' onClick={() => setIsMenuOpen(false)}><a href='/#hero' className='nav-link'>Home</a></Link>
                </div>
                <Link to="/"><a onClick={() => setIsMenuOpen(false)} className='nav-link' href='/#benefits'>benefits <div className='nav-link-line'></div></a> </Link>
                <Link to="/"><a onClick={() => setIsMenuOpen(false)} className='nav-link' href='/#services'>Services <div className='nav-link-line'></div></a> </Link>
                <Link to="/"><a onClick={() => setIsMenuOpen(false)} className='nav-link' href='/#plans'>memberships <div className='nav-link-line'></div></a> </Link>
                <Link to="/"><a onClick={() => setIsMenuOpen(false)} className='nav-link' href='/#benefits'>Work <div className='nav-link-line'></div></a> </Link>
                <Link to="/"><a onClick={() => setIsMenuOpen(false)} className='nav-link' href='/#benefits'>Use Cases <div className='nav-link-line'></div></a> </Link>
                <Link to="/"><a onClick={() => setIsMenuOpen(false)} className='nav-link' href='/#benefits'>FAQs <div className='nav-link-line'></div></a> </Link>
                <Link onClick={() => setIsMenuOpen(false)} to="/book-a-meeting" className='nav-link nav-link_special'>Book Call</Link>
            </nav >
        </div >
    )
}

export default Nav