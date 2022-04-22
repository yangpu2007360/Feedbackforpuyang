import { Link } from 'react-router-dom'

import { FaQuestion } from 'react-icons/fa'

import React from 'react'

function AboutIconLink() {
    return (
        <div className='about-link'>
            <Link to='/about'>
                <FaQuestion size={25} /> About
            </Link>


        </div>
    )
}

export default AboutIconLink