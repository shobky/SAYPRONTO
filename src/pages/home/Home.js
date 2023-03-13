import React from 'react'
import Header from '../../components/home/header/Header'
import './home.css'
import hero from '../../assets/abstract.jpg'
import Memberships from '../../components/home/memberships/Memberships'
import Services from '../../components/home/services/Services'
import Benefits from '../../components/home/benefits/Benefits'

const Home = () => {
    return (
        <div className='home'>
            <section className='hero'>
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
            <section>
                <Services />
            </section>
            <section>
                <Benefits />
            </section>
            <section >
                <Memberships />
            </section>
        </div>
    )
}

export default Home