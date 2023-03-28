import React from 'react'
import '../../../pages/home/home.css'
import './afterHero.css'
const AfterHero = () => {
  return (
    <div className='after-hero-container'>
      <h1 className='text_small' >How It Works</h1>
      <h2 className='text_bold'>Design-as-a-service is the way forward.</h2>
      <p className='text_reg'>No more expensive design agencies and freelancers with long lead times. Our subscription service delivers top-quality design and development, as you need it.</p>
      <div className='after-hero_flex'>
        <div className='after-hero_flex-item'>
          <p className='after-hero_flex_head'>1. Book a Demo</p>
          <p className='after-hero_flex_txt'>Understand our benefits, and sign up when you're ready.</p>
        </div>

        <div className='after-hero_flex-item'>
          <p className='after-hero_flex_head'>2. Subscribe & Request</p>
          <p className='after-hero_flex_txt'>Subscribe to a plan & request as many designs as you need.</p>
        </div>

        <div className='after-hero_flex-item'>
          <p className='after-hero_flex_head'>3. Get Your Designs</p>
          <p className='after-hero_flex_txt'>Receive your designs within 1-5 business days, on average.</p>
        </div>

        <div className='after-hero_flex-item'>
          <p className='after-hero_flex_head'>4. Unlimited Revisions</p>
          <p className='after-hero_flex_txt'>Not satisfied? Unlimited revisions until you are 200% happy.</p>
        </div>
      </div>
    </div>
  )
}

export default AfterHero