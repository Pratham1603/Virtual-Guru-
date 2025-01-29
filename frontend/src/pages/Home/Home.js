import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

export default function Home() {

    return (
        <div className='home-container'>
            <div className='home-header'>
                <h1 className='home-heading'>Virtual-Guru</h1>
            </div>

            <h1 className="description">Experience The Future Of Yoga With AI Powered Guidance!</h1>
            
            <div className="home-main">
                <div className="btn-section">
                    <Link to='/start'>
                        <button
                            className="btn start-btn"
                        >Let's Start</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
