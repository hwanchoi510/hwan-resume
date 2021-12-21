import React from 'react'
import './home.css'

function Home() {
    return (
        <div className='home'>
            <div className='home-text'>
                <h1>Hello</h1>
                <p>My name is Hwan</p>
            </div>
            {/* <div className='home-video'> Hello </div> */}
            <video src='/video/home-video.mp4' autoPlay loop muted />
        </div>
    )
}

export default Home
