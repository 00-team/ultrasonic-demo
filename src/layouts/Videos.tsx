import React from 'react'

// icons
import { AiOutlineFundProjectionScreen } from '@react-icons/all-files/ai/AiOutlineFundProjectionScreen'

// utils
import { LazyMotionY } from '../components/common/LazyMotion'
import Slider from '../components/slider/Slider'
import VideoCard from '../components/common/VideoCard'

// style
import './sass/videos.scss'

const BaseData = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

const Videos = () => {
    return (
        <div className='videos'>
            <div className='container'>
                <LazyMotionY>
                    <h2 className='title' id="videos">
                        <AiOutlineFundProjectionScreen />
                        دوره ها
                        <AiOutlineFundProjectionScreen />
                    </h2>
                </LazyMotionY>
                <h4 className='title'>اخرین دوره های انلاین</h4>
                <div className='wrapper'>
                    <Slider>
                        {BaseData.map(index => (
                            <VideoCard
                                title='عنوان '
                                description='  بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها '
                                key={index}
                            />
                        ))}
                    </Slider>
                </div>
                <h4 className='title'>اخرین دوره های حضوری</h4>
                <div className='wrapper'>
                    <Slider>
                        {BaseData.map(index => (
                            <VideoCard
                                title='عنوان '
                                description='  بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها '
                                key={index}
                            />
                        ))}
                    </Slider>
                </div>

                {/* <h4 className='title'>اخرین دوره های پولی</h4>
                <div className='wrapper'>
                    <Slider>
                        {BaseData.map((item, index) => (
                            <div key={index}>{item}</div>
                        ))}
                    </Slider>
                </div> */}
            </div>
        </div>
    )
}

export default Videos
