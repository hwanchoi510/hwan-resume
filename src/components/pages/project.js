import React, { useState } from 'react'
import ProjectInfo from '../ProjectInfo'
import { BangDB, Fox, FoxRun, LoLTeamSearch, Tender } from '../ProjectInfo/Data'
import './project.css'

function Project() {

    const [showUnity2D, setUnity2D] = useState(true);
    const [showWebApp, setWebApp] = useState(false);
    const [showAndroid, setAndroid] = useState(false);
    const DisplayUnity2D = () => {
        setUnity2D(true);
        setWebApp(false);
        setAndroid(false);
        window.scrollTo(0, 0);
    }

    const DisplayWebApp = () => {
        setWebApp(true);
        setUnity2D(false);
        setAndroid(false);
        window.scrollTo(0, 0);

    }

    const DisplayAndroid = () => {
        setWebApp(false);
        setUnity2D(false);
        setAndroid(true);
        window.scrollTo(0, 0);

    }

    return (
        <div className='project container'>
            {/* <div className='project menu'> */}
                <ul className='project menu'>
                    <li onClick={DisplayUnity2D}>Unity2D</li>
                    <li onClick={DisplayWebApp}>WebApps</li>
                    <li onClick={DisplayAndroid}>Android</li>
                </ul>
            {/* </div> */}
            <div className={showUnity2D ? 'project unity2d' : 'project unity2d unactive'}>
                <ProjectInfo {...Fox}/>
                <ProjectInfo {...FoxRun}/>
            </div>
            <div className={showWebApp ? 'project webapp' : 'project webapp unactive'}>
                <ProjectInfo {...BangDB}/>
                <ProjectInfo {...LoLTeamSearch}/>
            </div>
            <div className={showAndroid ? 'project android' : 'project android unactive'}>
                <ProjectInfo {...Tender}/>
            </div>
        </div>
    )
}

export default Project
