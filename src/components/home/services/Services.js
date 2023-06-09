import React from 'react'
import './services.css'
import svg from '../../../assets/svgs/lightining.SVG'
const Services = () => {
    return (
        <div id="services" className='services'>
            <div className='services-fixed-section'>
                <div className='services-fixed-text-container'>
                    <h1 className='se-text-small'><img src={svg} alt='' className='svg-ico'/>Services</h1>
                    <p className='services_head'>A full-suite of capabilities.</p>
                    <p className='services-text'>
                        We are your all-in-one creative team, and pride ourselves on being well-rounded in our abilities. From design to development, we got you covered.
                    </p>
                </div>
            </div>
            <div className='services-scroll-section'>
                <div className='services_grid'>
                    <div className='services-grid-top'>
                        <h2>Graphic Design</h2>
                        <p className='services-grip-sub-head'>Show off and grow your business with web design that looks great, performs well, and resonates with your users.</p>
                       <div className='services-pills-container'>

                        <p className="services_grid-cell">Websites</p>
                        <p className="services_grid-cell">Mobile apps</p>
                        <p className="services_grid-cell">Logos & branding</p>
                        <p className="services_grid-cell">Design systems</p>
                        <p className="services_grid-cell">SAAS</p>
                        <p className="services_grid-cell">Wireframes</p>
                        <p className="services_grid-cell">Stationery</p>
                       </div>

                    </div>
                    <div className='services-grid-mid'>
                        <h2>UX/UI Design</h2>
                        <p className='services-grip-sub-head'>Just like you know your business better than anyone, we know a few things about web design, UX, and product strategy.</p>
                       <div className='services-pills-container'>

                        <p className="services_grid-cell">Pitch decks</p>
                        <p className="services_grid-cell">Slide decks</p>
                        <p className="services_grid-cell">Direct mail</p>
                        <p className="services_grid-cell">Infographics</p>
                        <p className="services_grid-cell">Brochures</p>
                        <p className="services_grid-cell">Signage</p>
                        <p className="services_grid-cell">Brand guides</p>
                        <p className="services_grid-cell">Social media graphics</p>
                        <p className="services_grid-cell">Billboards</p>
                        <p className="services_grid-cell">Trade show banners</p>
                       </div>

                    </div>
                    <div className='services-grid-bottom'>
                        <h2>Low-Code Development</h2>
                        <p className='services-grip-sub-head'>We get businesses online and upgrade digital presences. We'll keep things neat on the backend so that it's easy to update, maintain, and get the most out of your website.</p>

                       <div className='services-pills-container'>
                       <p className="services_grid-cell">Email graphics</p>
                        <p className="services_grid-cell">Resumes</p>
                        <p className="services_grid-cell">Business cards</p>
                        <p className="services_grid-cell">Packaging</p>
                        <p className="services_grid-cell">Blog graphics</p>
                        <p className="services_grid-cell">Digital ads</p>
                        <p className="services_grid-cell">Icons</p>
                       </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Services







