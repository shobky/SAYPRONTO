import React from 'react'
import Header from '../../components/home/header/Header'
import './home.css'
import hero from '../../assets/abstract.jpg'
import Memberships from '../../components/home/memberships/Memberships'

const Home = () => {
    return (
        <div className='home'>
            <section className='hero'>
                <Header />
                <h2 className='hero_slogan'>Want a desgin<span className='hero_qm'>?</span> <br /> <p className='hero_sp'>Say Pronto</p></h2>
                <button className='hero_btn'>Plans</button>
                <img className='hero_img' alt='abstract' src={hero} />
            </section>
            <section>
                <Memberships />
            </section>
        </div>
    )
}

export default Home