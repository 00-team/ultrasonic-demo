import React from 'react'

// utils
import {
    LazyMotionX,
    LazyMotionXReverse,
    LazyMotionY,
} from '../components/common/LazyMotion'


// bg image 
import img from "../../static/imgs/footer.jpg"

// style
import './sass/footer.scss'

const Footer = () => {
    return (
        <div className='footer' style={{
            backgroundImage: `url(${img})`,
        }}>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <LazyMotionXReverse>
                        <div className='footer-link-items'>
                            <h2>درباره ما</h2>
                            <a className='link' href=''>
                                درباره استاد خسرویان
                            </a>
                            <a className='link' href=''>
                                سوالات متداول
                            </a>
                            <a className='link' href=''>
                                دیدن همه سوالات
                            </a>
                        </div>
                    </LazyMotionXReverse>
                    <LazyMotionY>
                        <div className='footer-link-items'>
                            <h2>ارتباط با ما</h2>
                            <a className='link' href=''>
                                تماس مستقیم
                            </a>
                            <a className='link' href=''>
                                واتساپ
                            </a>
                            <a className='link' href=''>
                                تلگرام
                            </a>
                            <a className='link' href=''>
                                اینستاگرام
                            </a>
                        </div>
                    </LazyMotionY>
                    <LazyMotionX>
                        <div className='footer-link-items'>
                            <h2>دوره ها</h2>
                            <a className='link' href=''>
                                اخرین دوره ها
                            </a>
                            <a className='link' href=''>
                                دیدن همه دوره ها
                            </a>
                            <a className='link' href=''>
                                دوره های حضوری
                            </a>
                        </div>
                    </LazyMotionX>
                </div>
            </div>
        </div>
    )
}

export default Footer
