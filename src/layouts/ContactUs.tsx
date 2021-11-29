import React from 'react'

// icons
// import { IoLogoInstagram } from '@react-icons/all-files/io5/IoLogoInstagram'
// import { SiWhatsapp } from '@react-icons/all-files/si/SiWhatsapp'
// import { SiTelegram } from '@react-icons/all-files/si/SiTelegram'
import { FiPhoneCall } from '@react-icons/all-files/fi/FiPhoneCall'

// style
import './sass/contact.scss'

// utils
import { LazyMotionY } from '../components/common/LazyMotion'

const ContactUs = () => {
    return (
        <div className='contact'>
            <div className='container'>
                <LazyMotionY>
                    <h2 className='title'>
                        <FiPhoneCall />
                        تماس با ما
                        <FiPhoneCall />
                    </h2>
                </LazyMotionY>
                <div className='wrapper'>
                    <h4 className="title">صفحات مجازی</h4>
                    
                </div>
            </div>
        </div>
    )
}

export default ContactUs
