import React from 'react'
import { Link } from 'react-router-dom'


function About() {
    return (
        <div className='about'>
            <h1>About</h1>
            <h2>This is a React App to receive feedback for a product or service.</h2>
            <p>Please contact Pu Yang at yangpu2007360@gmail.com for questions. </p>
            <p><Link to='/'>Go to Home</Link></p>
        </div>

    )
}

export default About