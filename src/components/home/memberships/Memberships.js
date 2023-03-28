import React from 'react'
import drippy from '../../../assets/abstractwhite.jpg'
import './memberships.css'

const Memberships = () => {
    return (
        <div className='memberships'>
            <div style={{ scrollBehavior: "smooth" }} id='plans' className='memberships_padding'>
                <h2 className='memberships_head'>Memberships levels</h2>
                <p className='memberships_subhead'>Choose your plan</p>
                <div className='memberships_flexbox'>
                    <div className='membership-container'>
                        <div className='membership-top'>
                            <h2>Monthly</h2>
                            <p className='membership-subheading'>No minimum commitment.</p>
                            <h2 className='membership-price'>$4995/m</h2>
                            <p className='membership-subprice'>pause or cancel anytime</p>
                            <button className='membership_main-btn membership__btn'>Get started</button>
                            <button className='membership_second-btn membership__btn'>Book a call</button>
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
                            <button className='membership_main-btn membership__btn'>Get started</button>
                            <button className='membership_second-btn membership__btn'>Book a call</button>
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
                            <button className='membership_main-btn membership__btn'>Get started</button>
                            <button className='membership_second-btn membership__btn'>Book a call</button>
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