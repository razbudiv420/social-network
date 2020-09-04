import React from 'react'
import preloaderGif from '../../assets/preloader.gif'

const Preloader = (props) => {
    
    return (
        <div>
            <img src={preloaderGif} alt="loading"/>
        </div>
    )
}

export default Preloader;