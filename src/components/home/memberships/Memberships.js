import React from 'react'
import './memberships.css'
import { useNavigate } from 'react-router-dom'

const Memberships = () => {

    const navigate = useNavigate()
    

    const handleGetStarted = async () => {
        navigate('/book-a-meeting')
    }
    return (
        <div id='plans' className='memberships'>
            <div style={{ scrollBehavior: "smooth" }} className='memberships_padding'>
                <h1 className='ms_text_small'>Pay Monthly Designs</h1>
                <h2 className='ms_text_bold'>Memberships levels</h2>
                <p className='memberships_subhead'>As little as $3,995 a month.</p>
                <div className='memberships_flexbox'>
                    <div className='membership-container'>
                        <div className='membership-top'>
                            <h2>Monthly</h2>
                            <p className='membership-subheading'>No minimum commitment.</p>
                            <h2 className='membership-price'>$4995/m</h2>
                            <p className='membership-subprice'>pause or cancel anytime</p>
                            <button onClick={handleGetStarted} className='membership_main-btn membership__btn'>Get started</button>
                        </div>
                        <div className='membership-bottom'>
                            <h3>What's included:</h3>
                            <ul>
                                <li>Unlimited requests</li>
                                <li>Unlimited brands</li>
                                <li>Unlimited users</li>
                                <li>Unlimited stock photos via Shutterstock</li>
                                <li>Pause or cancel anytime</li>

                            </ul>
                        </div>
                    </div>

                    <div className='membership-container'>
                        <div className='membership-top'>
                            <h2>Quarterly</h2>
                            <p className='membership-subheading'>Save $500 per month.</p>
                            <h2 className='membership-price'>$4495/m</h2>
                            <p className='membership-subprice'>Paid quarterly</p>
                            <button onClick={handleGetStarted} className='membership_main-btn membership__btn'>Get started</button>
                        </div>
                        <div className='membership-bottom'>
                            <h3>What's included:</h3>
                            <ul>
                                <li>Unlimited requests</li>
                                <li>Unlimited brands</li>
                                <li>Unlimited users</li>
                                <li>Unlimited stock photos via Shutterstock</li>
                            </ul>
                        </div>
                    </div>
                    <div className='membership-container'>
                        <div className='membership-top'>
                            <h2>Yearly</h2>
                            <p className='membership-subheading'>Save $1,000 per month.</p>
                            <h2 className='membership-price'>$3,995/m</h2>
                            <p className='membership-subprice'>Paid annually</p>
                            <button type='butotn' onClick={handleGetStarted} className='membership_main-btn membership__btn'>Get started</button>
                        </div>
                        <div className='membership-bottom'>
                            <h3>What's included:</h3>
                            <ul>
                                <li>Unlimited requests</li>
                                <li>Unlimited brands</li>
                                <li>Unlimited users</li>
                                <li>Unlimited stock photos via Shutterstock</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Memberships