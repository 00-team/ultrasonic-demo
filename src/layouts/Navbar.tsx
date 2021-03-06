import React, { useEffect, useState } from 'react'

// icons 
import { IoMdHome } from '@react-icons/all-files/io/IoMdHome';
import { AiOutlineFundProjectionScreen } from '@react-icons/all-files/ai/AiOutlineFundProjectionScreen';
import { MdGroup } from '@react-icons/all-files/md/MdGroup';
import {FiPhoneCall} from "@react-icons/all-files/fi/FiPhoneCall";

// redux 
import { useSelector } from 'react-redux'
import { RootState } from 'src/redux'

// style 
import "./sass/navbar.scss"

const Navbar = () => {
    const scrollTop = useSelector((state:RootState) => state.App.winwid)
    const [Active, setActive] = useState(false)

    useEffect(() => {
        if(scrollTop >= 100) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [scrollTop])

    return (
        <div className={`navbar ${Active ? 'active' : ''}`}>
            <ul className='menu'>
                <li>
                    <a href='#'>
                        خانه <IoMdHome />
                    </a>
                </li>
                <li>
                    <a href='#videos'>
                        دوره ها <AiOutlineFundProjectionScreen />{' '}
                    </a>
                </li>
                <li>
                    <a href='#about'>
                        درباره ما <MdGroup  />
                    </a>
                </li>
                <li>
                    <a href='#contact'>
                        تماس با ما <FiPhoneCall />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
