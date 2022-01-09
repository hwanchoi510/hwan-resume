import React from 'react'
import './profile.css'
import Resume from './Resume_hwan510.pdf'

function profile() {
    return (
        <div className='profile container'>
            <img src='/images/profile.jpg' className='profile-img' alt="profile pic"/>
            <div className='profile text'>
                <h1 className='profile name'>Hwan Choi</h1>
                <div className='profile desc'>
                    <p>Virginia Tech, CS major</p>
                    <p>Expected Graduation: May 2022</p>
                    <br/> Have basic knowledge of:
                    <ul className='profile basic list'>
                        <li>Java</li>
                        <li>Python</li>
                    </ul>
                    <br/> Familiar With:
                    <ul className='profile familiar list'>
                        <li>C</li>
                        <li>Unity2D/C#</li>
                        <li>javascript</li>
                        <li>html</li>
                        <li>css</li>
                        <li>react</li>
                    </ul>
                    <br/>Languages:
                    <ul className='profile lang list'>
                        <li>English</li>
                        <li>Korean</li>
                    </ul>
                    <br/>
                    <ul className='profile links list'>
                        <li><a href='https://github.com/hwanchoi510' target='_blank' rel='noreferrer'><i class="profile icon fab fa-github"/>Github</a></li>
                        <li><a href='https://hwanchoi510.itch.io/' target='_blank' rel='noreferrer'><i class="profile icon fab fa-itch-io"/>itch.io</a></li>
                        <li><a href={Resume} target='_blank' rel='noreferrer'><i class="profile icon fas fa-file-pdf"/>Resume</a></li>
                    </ul>    
                </div>
            </div>
        </div>
    )
}

export default profile
