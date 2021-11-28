import React from 'react'

// style 
import "./sass/navbar.scss"

const Navbar = () => {
    return (
        <div className="navbar">
                <ul className='menu'>
                    <li>
                        <a href='#!'>Home</a>
                    </li>
                    <li>
                        <a href='#!'>About</a>
                    </li>
                    <li>
                        <a href='#!'>Contact</a>
                    </li>
                    <li>
                        <a href='#!'>Faq</a>
                    </li>
                </ul>
        </div>
    )
}

export default Navbar
