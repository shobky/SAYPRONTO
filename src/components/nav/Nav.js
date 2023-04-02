import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import './nav.css'

import { AiOutlineMenu } from 'react-icons/ai'
import { IoCloseOutline } from 'react-icons/io5'
import NavLink from '../../hooks/NavLink';


const Nav = ({ handleActivePage, activePage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate = useNavigate()
    const openMenu = () => {
        setIsMenuOpen(true)
    }
    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    const location = useLocation();
    const handleMenuClick = () => setIsMenuOpen(false);

    let homeLink = null;
    if (location.pathname !== '/') {
        homeLink = (
            <Link to='/' className='nav-link' onClick={handleMenuClick}>Home</Link>
        );
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
                    {homeLink}
                </div>
                {location.pathname !== '/book-a-meeting' &&
                    <>
                        <NavLink to={'/#benefits'} className='nav-link' onClick={handleMenuClick}>benefits <div className='nav-link-line'></div></NavLink>
                        <NavLink to={'/#services'} className='nav-link' onClick={handleMenuClick}>Services <div className='nav-link-line'></div></NavLink>
                        <NavLink to={'/#plans'} className='nav-link' onClick={handleMenuClick}>memberships <div className='nav-link-line'></div></NavLink>
                        <NavLink to={'/#work'} className='nav-link' onClick={handleMenuClick}>Work <div className='nav-link-line'></div></NavLink>
                        <NavLink to={'/#use-cases'} className='nav-link' onClick={handleMenuClick}>Use Cases <div className='nav-link-line'></div></NavLink>
                        <NavLink to={'/#faqs'} className='nav-link' onClick={handleMenuClick}>FAQs <div className='nav-link-line'></div></NavLink>
                        <NavLink to={"/book-a-meeting"} className='nav-link nav-link_special' onClick={handleMenuClick}>Book Call</NavLink>
                    </>
                }
            </nav>
        </div >
    )
}

export default Nav