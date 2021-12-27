import React from 'react'
import './contact.css'

function contact() {
    return (
        <div   className='contact container'>
            <div className='contact text'>
                <h1><i class="icon far fa-address-card"/>Contact</h1>
                <ul className='contact info list'>
                    <li>Name: Hwan Choi</li>
                    <li>Address: Blacksburg, Virginia</li>
                    <li>Phone: (+1)540-449-7590</li>
                    <li>Primary Email: <a href="mailto:choihwany@naver.com" className='contact email'>choihwany@naver.com</a></li>
                    <li>Secondary Email: <a href="mailto:hwanchoi510@yahoo.com" className='contact email'>hwanchoi510@yahoo.com</a></li>
                </ul>
            </div>
        </div>
    )
}

export default contact
