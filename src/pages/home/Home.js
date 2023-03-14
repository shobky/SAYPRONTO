import React, { useState } from 'react'
import Header from '../../components/home/header/Header'
import './home.css'
import hero from '../../assets/abstract.jpg'
import Memberships from '../../components/home/memberships/Memberships'
import Services from '../../components/home/services/Services'
import Benefits from '../../components/home/benefits/Benefits'
import Footer from '../../components/home/footer/Footer'

const Home = () => {
    const [navOpen, setnavOpen] = useState(false)

    let startY; // will hold the starting Y position of the touch

    const handleTouchStart = (event) => {
        // store the starting Y position of the touch
        startY = event.touches[0].clientY;
    }

    const handleTouchEnd = (event) => {

        const endY = event.changedTouches[0].clientY; // ending Y position of the touch

        // calculate the distance moved
        const distance = startY - endY;

        // check if the user swiped up or down
        if (distance > 0) {
            // user swiped up
            document.getElementById('header').classList.remove('header_scroll__active');
            document.getElementById('header').classList.add('home_header');


            // setnavOpen(false)

        } else {
            // user swiped down

            document.getElementById('header').classList.add('header_scroll__active');
            document.getElementById('header').classList.remove('home_header');

        }
    }


    return (
        <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} className='home'>
            <section id='hero' className='hero'>
                <Header />
                <div className='hero_container'>
                    <div className='slg-btn'>
                        <h2 className='hero_slogan'>Want a desgin<span className='hero_qm'>?</span> <br /> <p className='hero_sp'>Saypronto</p></h2>
                        <a href='#plans' className='hero_btn'>Plans</a>
                    </div>
                    <div>
                        <img className='hero_img' alt='abstract' src={hero} />
                    </div>
                </div>
            </section>
            <Services />
            <Benefits />
            <Memberships />
            <Footer />
        </div>
    )
}

export default Home