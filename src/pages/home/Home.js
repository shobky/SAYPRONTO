import React from 'react'
import Header from '../../components/home/header/Header'
import './home.css'
import Memberships from '../../components/home/memberships/Memberships'
import Services from '../../components/home/services/Services'
import Benefits from '../../components/home/benefits/Benefits'
import Footer from '../../components/home/footer/Footer'
import AfterHero from '../../components/home/afterHero/AfterHero'
import Nav from '../../components/nav/Nav'
import design from '../../assets/svgs/design + webflow.svg'
const Home = () => {

    return (
        <div className='home'>
            <section id='home' className='hero'>
                {/* <Header /> */}
                <div className='hero_container'>
                    <h1 className='text_small'><img src={design} className="svg-ico" /> Design & Development Agency</h1>
                    <h2 className='text_bold'>The unlimited design subscription that does it all.</h2>
                    <p className='text_reg'>One service for all of your creative needs. Quality standards. Painless management. Unlimited requests & revisions.</p>
                    <a href='#plans' className='hero_btn'>I'M ALREADY INTERESTED</a>
                    <div>
                    </div>
                </div>
            </section>
            <AfterHero />
            <Benefits />
            <Services />
            <Memberships />
        </div>
    )
}

export default Home