import React from 'react'
import { LazyMotionY } from '../components/common/LazyMotion'
import { ButtonWithBackGround } from '../components/common/Button'

// style
import './sass/herosection.scss'

const HeroSection = () => {
    return (
        <div className='hero-container'>
            {/* <video
                src='https://cdn.discordapp.com/attachments/833800676596908042/885106002544963644/VID-20210908-WA0001.mp4'
                loop
            ></video> */}
            {/* <img src='https://picsum.photos/1920/1080' alt='' /> */}
            <img
                src='https://i.picsum.photos/id/304/1920/1080.jpg?hmac=UzCQxA0TUIFAJQrUslzw-8Edf3CCNHw0jbj4oX9K12M'
                alt=''
            />

            <LazyMotionY>
                <div className='card'>
                    <p className='title'>اولتراسونیک</p>
                    <p className='description'>با استاد خسرویان</p>
                    <div className='btns'>
                        <ButtonWithBackGround borderRadius={3} border={true}>
                            التراسونیک چیست
                        </ButtonWithBackGround>

                        <ButtonWithBackGround borderRadius={3} border={true}>
                            دوره ها
                        </ButtonWithBackGround>

                        <ButtonWithBackGround borderRadius={3} border={true}>
                            سوالات متداول
                        </ButtonWithBackGround>
                    </div>
                </div>
            </LazyMotionY>
        </div>
    )
}

export default HeroSection
