import React, { useState } from 'react'
import ProjectInfo from '../ProjectInfo'
import { BangDB, Fox, FoxRun } from '../ProjectInfo/Data'
import './project.css'

function Project() {

    const [showUnity2D, setUnity2D] = useState(true);
    const [showWebApp, setWebApp] = useState(false);
    const DisplayUnity2D = () => {
        setUnity2D(true);
        setWebApp(false);
    }

    const DisplayWebApp = () => {
        setWebApp(true);
        setUnity2D(false);
    }

    return (
        <div className='project container'>
            {/* <div className='project menu'> */}
                <ul className='project menu'>
                    <li onClick={DisplayUnity2D}>Unity2D</li>
                    <li onClick={DisplayWebApp}>WebApps</li>
                </ul>
            {/* </div> */}
            <div className={showUnity2D ? 'project unity2d' : 'project unity2d unactive'}>
                <ProjectInfo {...Fox}/>
                <ProjectInfo {...FoxRun}/>
            </div>
            <div className={showWebApp ? 'project webapp' : 'project webapp unactive'}>
                <ProjectInfo {...BangDB}/>
            </div>
        </div>
    )
}

export default Project
