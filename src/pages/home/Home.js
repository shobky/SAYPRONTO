import React, { Suspense, lazy } from 'react'
import './home.css'
import design from '../../assets/svgs/hero.svg'
const AfterHero = lazy(() => import('../../components/home/afterHero/AfterHero'))
const Benefits = lazy(() => import('../../components/home/benefits/Benefits'))
const Services = lazy(() => import('../../components/home/services/Services'))
const Memberships = lazy(() => import('../../components/home/memberships/Memberships'))

const Home = () => {

    return (
        <div className='home'>
            <section id='home' className='hero'>
                <div className='hero_container'>
                    <h1 className='text_small'><img src={design} alt="" className="svg-ico" /> Design & Development Agency</h1>
                    <h2 className='text_bold'>The unlimited design subscription that does it all.</h2>
                    <p className='text_reg'>One service for all of your creative needs. Quality standards. Painless management. Unlimited requests & revisions.</p>
                    <a href='#plans' className='hero_btn'>I'M ALREADY INTERESTED</a>
                    <div>
                    </div>
                </div>
            </section>
            <Suspense>
                <AfterHero />
            </Suspense>
            <Suspense>
                <Benefits />
            </Suspense>
            <Suspense>
                <Services />
            </Suspense>
            <Suspense>
                <Memberships />
            </Suspense>
        </div>
    )
}

export default Home