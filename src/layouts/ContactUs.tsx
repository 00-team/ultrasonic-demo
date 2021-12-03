import React from 'react'

// icons
import { IoLogoInstagram } from '@react-icons/all-files/io5/IoLogoInstagram'
import { SiWhatsapp } from '@react-icons/all-files/si/SiWhatsapp'
import { SiTelegram } from '@react-icons/all-files/si/SiTelegram'
import { FiPhoneCall } from '@react-icons/all-files/fi/FiPhoneCall'

// style
import './sass/contact.scss'

// utils
import {
    LazyMotionX,
    LazyMotionXReverse,
    LazyMotionY,
} from '../components/common/LazyMotion'

const ContactUs = () => {
    return (
        <div className='contact'>
            <div className='container'>
                <LazyMotionY>
                    <h2 className='title' id="contact">
                        <FiPhoneCall />
                        تماس با ما
                        <FiPhoneCall />
                    </h2>
                </LazyMotionY>
                <div className='wrapper'>
                    <h4 className='title'>صفحات مجازی</h4>
                    <div className='social-icons'>
                        <LazyMotionX>
                            <a className='social-icon call'>
                                <FiPhoneCall className='icon-svg' />
                                <div className='tooltip'>09120974956</div>
                            </a>
                        </LazyMotionX>
                        <LazyMotionY>
                            <a className='social-icon instagram'>
                                <IoLogoInstagram className='icon-svg' />
                                <div className='tooltip'>@Sadra_Tghvi</div>
                            </a>
                        </LazyMotionY>
                        <LazyMotionY>
                            <a className='social-icon facebook'>
                                <SiWhatsapp className='icon-svg' />
                                <div className='tooltip'>09120974956</div>
                            </a>
                        </LazyMotionY>
                        <LazyMotionXReverse>
                            <a className='social-icon tel'>
                                <SiTelegram className='icon-svg' />
                                <div className='tooltip'>@sadrataghavi3</div>
                            </a>
                        </LazyMotionXReverse>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
