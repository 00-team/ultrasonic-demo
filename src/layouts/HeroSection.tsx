import React from 'react'

// comps
// import { ButtonWithBackGround } from '../components/common/Button'

// utils
import {
    LazyMotionY,
    LazyMotionX,
    LazyMotionXReverse,
} from '../components/common/LazyMotion'

// video
// import video from '../../static/vids/demo.webm'
import img from '../../static/imgs/hero.png'

// style
import './sass/herosection.scss'

const HeroSection = () => {
    return (
        <div className='hero-container'>
            <div className='content'>
                <div className='texts'>
                    <LazyMotionXReverse>
                        <div className='title'>التروسونیک با استاد خسرویان</div>
                    </LazyMotionXReverse>
                    <LazyMotionX>
                        <h1 className='description'>
                            ثبت نام <br />
                            دوره های انلاین <br />و کلاس های حضوری
                        </h1>
                    </LazyMotionX>
                </div>
                <LazyMotionY>
                    <div
                        className='img'
                        style={{
                            backgroundImage: `url(${img})`,
                        }}
                    ></div>
                </LazyMotionY>
            </div>
        </div>
    )
}

export default HeroSection
