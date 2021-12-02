import React from 'react'

// icons 
import { AiOutlineFundProjectionScreen } from '@react-icons/all-files/ai/AiOutlineFundProjectionScreen'

// utils
import { LazyMotionY } from '../components/common/LazyMotion'
import Slider from '../components/slider/Slider'


// style
import './sass/videos.scss'

const BaseData = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

const Videos = () => {
    return (
        <div className='videos'>
            <div className='container'>
                <LazyMotionY>
                    <h2 className='title'>
                        <AiOutlineFundProjectionScreen />
                        دوره ها
                        <AiOutlineFundProjectionScreen />
                    </h2>
                </LazyMotionY>
                <h4 className='title'>اخرین دوره های رایگان</h4>
                <div className='wrapper'>
                    <Slider>
                        {BaseData.map((item, index) => (
                            <div key={index}>{item}</div>
                        ))}
                    </Slider>
                </div>
                <h4 className='title'>اخرین دوره های پولی</h4>
                <div className='wrapper'>
                    <Slider>
                        {BaseData.map((item, index) => (
                            <div key={index}>{item}</div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Videos
