import React from 'react'

// style 
import "./sass/navbar.scss"

const Navbar = () => {
    return (
        <div className="navbar">
                <ul className='menu'>
                    <li>
                        <a href='#!'>خانه</a>
                    </li>
                    <li>
                        <a href='#!'>دوره ها</a>
                    </li>
                    <li>
                        <a href='#!'>درباره ما</a>
                    </li>
                    <li>
                        <a href='#!'>تماس با ما</a>
                    </li>
                </ul>
        </div>
    )
}

export default Navbar
