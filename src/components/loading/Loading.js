import React from 'react'
import './loading.css'
import { ImSpinner9 } from 'react-icons/im'

const Loading = () => {
    return (
        <div className='loading-container'>
            <h1>saypronto</h1>
            <ImSpinner9  className='loading-ico'/>
        </div>
    )
}

export default Loading