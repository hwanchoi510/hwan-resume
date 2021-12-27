import React from 'react'
import './home.css'

function Home() {
    return (
        <div className='home-container'>
            <div className='home-text'>
                <h1>Hello</h1>
                <p>Welcome to my website</p>
            </div>
            <video src='/video/home-video.mp4' autoPlay loop muted />
        </div>
    )
}

export default Home
