import React from 'react'
import './services.css'
import elephant from '../../../assets/elephant.svg'
const Services = () => {
    return (
        <div className='services'>
            <img className='services_elephant' alt='' src={elephant} />
            <h1 className='services_head'>Apps, websites, logos & more.</h1>
            <div className='services_grid'>
                <h4>What we do</h4>
                <br/>
                <p class="services_grid-cell">Websites</p>
                <p class="services_grid-cell">Mobile apps</p>
                <p class="services_grid-cell">Logos & branding</p>
                <p class="services_grid-cell">Design systems</p>
                <p class="services_grid-cell">SAAS</p>
                <p class="services_grid-cell">Wireframes</p>
                <p class="services_grid-cell">Stationery</p>
                <p class="services_grid-cell">Pitch decks</p>
                <p class="services_grid-cell">Slide decks</p>
                <p class="services_grid-cell">Direct mail</p>
                <p class="services_grid-cell">Infographics</p>
                <p class="services_grid-cell">Brochures</p>
                <p class="services_grid-cell">Signage</p>
                <p class="services_grid-cell">Brand guides</p>
                <p class="services_grid-cell">Social media graphics</p>
                <p class="services_grid-cell">Billboards</p>
                <p class="services_grid-cell">Trade show banners</p>
                <p class="services_grid-cell">Email graphics</p>
                <p class="services_grid-cell">Resumes</p>
                <p class="services_grid-cell">Business cards</p>
                <p class="services_grid-cell">Packaging</p>
                <p class="services_grid-cell">Blog graphics</p>
                <p class="services_grid-cell">Digital ads</p>
                <p class="services_grid-cell">Icons</p>
            </div>
        </div>
    )
}

export default Services