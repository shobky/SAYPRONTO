import React from 'react'
import './benefits.css'
import infinity from '../../../assets/infinity.png'
import stopwatch from '../../../assets/stopwatch.png'
import deposit from '../../../assets/deposit.png'
import life from '../../../assets/life.png'
import maximize from '../../../assets/maximize.png'
import fingerprint from '../../../assets/fingerprint.png'





const Benefits = () => {
    return (
        <div id='benefits' className='benefits'>
           <div className='benefits_header'>
           <h1 className='be_text_small'>Membership benefits</h1>
            <h2 className='be_text_bold'>Perks you'll love, and more.</h2>
            <a href='#plans'>Jump to plans</a>
           </div>
            <div className='benefits-grid'>
                <div className='benefit-contaienr'>
                    <img alt='' className='benefits_ico' src={infinity} />
                    <h3>Design Board</h3>
                    <p>Add as many design requests to your board as you'd like.</p>
                </div>
                <div className='benefit-contaienr'>
                    <img alt='' className='benefits_ico' src={stopwatch} />
                    <h3>Lightning fast delivery</h3>
                    <p>Get your design one at a time in just a few days on average.</p>
                </div>

                <div className='benefit-contaienr'>
                    <img alt='' className='benefits_ico' src={deposit} />
                    <h3>Fixed monthly rate</h3>
                    <p>No surprises here! Pay the same fixed price each month.</p>
                </div>
                <div className='benefit-contaienr'>
                    <img alt='' className='benefits_ico' src={life} />
                    <h3>Top-notch quality</h3>
                    <p>Insane design quality at your fingertips whenever you need it..</p>
                </div>
                <div className='benefit-contaienr'>
                    <img alt='' className='benefits_ico' src={maximize} />
                    <h3>Flexible and scalable</h3>
                    <p>Scale up or down as needed, and pause or cancel at anytime..</p>
                </div>
                <div className='benefit-contaienr'>
                    <img alt='' className='benefits_ico' src={fingerprint} />
                    <h3>Unique and all yours</h3>
                    <p>Each of your designs is made especially for you and is 100% yours.</p>
                </div>
            </div>
        </div>
    )
}

export default Benefits