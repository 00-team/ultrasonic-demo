import React from 'react'

// comps
// import { ButtonWithBackGround } from '../components/common/Button'

// utils
// import { LazyMotionY } from '../components/common/LazyMotion'

// video
// import video from '../../static/vids/demo.webm'
import img from "../../static/imgs/hero.png"

// style
import './sass/herosection.scss'

const HeroSection = () => {
    return (
        <div className='hero-container'>
            <div className='content'>
                <div className='texts'>
                    <div className='title'>التروسونیک با استاد خسرویان</div>
                    <h1 className='description'>
                        ثبت نام <br />
                        دوره های انلاین <br />و کلاس های حضوری
                    </h1>
                </div>
                <div
                    className='img'
                    style={{
                        backgroundImage: `url(${img})`,
                    }}
                >
                    {/* <img
                        loading='lazy'
                        src={img}
                        alt='My Ultrasound Tutor offers One-on-one Live Tutor, Registry Review Courses and Practice Exams'
                        width='1900'
                        height='554'
                    /> */}
                </div>
            </div>
        </div>
    )
}

export default HeroSection
