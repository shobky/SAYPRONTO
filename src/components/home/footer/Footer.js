import React from 'react'
import './footer.css'
import rainbow from '../../../assets/tgt15.jpg'
import { HiLogin } from 'react-icons/hi'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_header'>
                <h1>See if Saypronto is right for you. {`(It totally is.)`}</h1>
                <p>Get a guided tour through Designjoy, and find out how you and your team can change the way you source design, forever.</p>
                <a className='footer_top-btn' href='/#plans'>Get started</a>
            </div>

            <div className='footer_footer'>
                <h2><a href='/#hero' style={{textDecoration:"none", color:"inherit"}}>Saypronto</a></h2>
                <ul>
                    <li>pricing</li>
                    <li>FAQs</li>
                    <li>Contact</li>
                    <li>Get started</li>
                    <li>Privacy policy</li>
                    {/* <li className='footer_login_link'>Login <HiLogin className="footer_login-ico"/></li> */}
                    <li>Terms & conditions</li>

                </ul>
            </div>
        </div>
    )
}

export default Footer