import React from 'react'

// icons
// import { GiSoundWaves } from '@react-icons/all-files/gi/GiSoundWaves'

// imgs 
import education from "../../static/imgs/education.jpg"
import work from '../../static/imgs/work.jpg'
import students from '../../static/imgs/students.jpg'
import videos from '../../static/imgs/videos.jpg'

// utils
import {
    LazyMotionX,
    LazyMotionXReverse,
    LazyMotionY,
} from '../components/common/LazyMotion'
import Bars from '../components/common/Bars'

// style
import './sass/about.scss'

const AboutUs = () => {
    return (
        <div className='about'>
            <div className='container'>
                <LazyMotionY>
                    <h2 id='about' className='title'>
                        <Bars />
                        درباره ما
                        <Bars />
                    </h2>
                </LazyMotionY>
                <div className='wrapper'>
                    <LazyMotionX>
                        <div className='item reverse'>
                            <div className='img'>
                                <img
                                    // src='https://picsum.photos/1920/1080'
                                    src={education}
                                    alt=''
                                />
                            </div>
                            <div className='text'>
                                <div className='header'>تحصیلات </div>
                                <p className='description'>
                                    {' '}
                                    ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                                    با استفاده از طراحان گرافیک است. چاپگرها و
                                    متون بلکه روزنامه و مجله در ستون و سطرآنچنان
                                    که لازم است و برای شرایط فعلی تکنولوژی مورد
                                    نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                                    کاربردی می باشد. کتابهای زیادی در شصت و سه
                                    درصد گذشته، حال و آینده شناخت فراوان جامعه و
                                    متخصصان را می طلبد تا با نرم افزارها شناخت
                                    بیشتری را برای طراحان رایانه ای علی الخصوص
                                    طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
                                    ایجاد کرد. در این صورت می توان امید داشت که
                                    تمام و دشواری موجود در ارائه راهکارها و
                                    شرایط سخت تایپ به پایان رسد وزمان مورد نیاز
                                    شامل حروفچینی دستاوردهای اصلی و جوابگوی
                                    سوالات پیوسته اهل دنیای موجود طراحی اساسا
                                    مورد استفاده قرار گیرد.
                                </p>
                            </div>
                        </div>
                    </LazyMotionX>
                    <LazyMotionXReverse>
                        <div className='item'>
                            <div className='img'>
                                <img
                                    // src='https://picsum.photos/1920/1080'
                                    src={work}
                                    alt=''
                                />
                            </div>
                            <div className='text'>
                                <div className='header'>سابقه کار </div>
                                <p className='description'>
                                    {' '}
                                    ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                                    با استفاده از طراحان گرافیک است. چاپگرها و
                                    متون بلکه روزنامه و مجله در ستون و سطرآنچنان
                                    که لازم است و برای شرایط فعلی تکنولوژی مورد
                                    نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                                    کاربردی می باشد. کتابهای زیادی در شصت و سه
                                    درصد گذشته، حال و آینده شناخت فراوان جامعه و
                                    متخصصان را می طلبد تا با نرم افزارها شناخت
                                    بیشتری را برای طراحان رایانه ای علی الخصوص
                                    طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
                                    ایجاد کرد. در این صورت می توان امید داشت که
                                    تمام و دشواری موجود در ارائه راهکارها و
                                    شرایط سخت تایپ به پایان رسد وزمان مورد نیاز
                                    شامل حروفچینی دستاوردهای اصلی و جوابگوی
                                    سوالات پیوسته اهل دنیای موجود طراحی اساسا
                                    مورد استفاده قرار گیرد.
                                </p>
                            </div>
                        </div>
                    </LazyMotionXReverse>
                    <LazyMotionX>
                        <div className='item reverse'>
                            <div className='img'>
                                <img
                                    // src='https://picsum.photos/1920/1080'
                                    src={students}
                                    alt=''
                                />
                            </div>
                            <div className='text'>
                                <div className='header'>دانش اموزان برتر </div>
                                <p className='description'>
                                    {' '}
                                    ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                                    با استفاده از طراحان گرافیک است. چاپگرها و
                                    متون بلکه روزنامه و مجله در ستون و سطرآنچنان
                                    که لازم است و برای شرایط فعلی تکنولوژی مورد
                                    نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                                    کاربردی می باشد. کتابهای زیادی در شصت و سه
                                    درصد گذشته، حال و آینده شناخت فراوان جامعه و
                                    متخصصان را می طلبد تا با نرم افزارها شناخت
                                    بیشتری را برای طراحان رایانه ای علی الخصوص
                                    طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
                                    ایجاد کرد. در این صورت می توان امید داشت که
                                    تمام و دشواری موجود در ارائه راهکارها و
                                    شرایط سخت تایپ به پایان رسد وزمان مورد نیاز
                                    شامل حروفچینی دستاوردهای اصلی و جوابگوی
                                    سوالات پیوسته اهل دنیای موجود طراحی اساسا
                                    مورد استفاده قرار گیرد.
                                </p>
                            </div>
                        </div>
                    </LazyMotionX>
                    <LazyMotionXReverse>
                        <div className='item'>
                            <div className='img'>
                                <img
                                    // src='https://picsum.photos/1920/1080'
                                    src={videos}
                                    alt=''
                                />
                            </div>
                            <div className='text'>
                                <div className='header'>دوره </div>
                                <p className='description'>
                                    {' '}
                                    ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                                    با استفاده از طراحان گرافیک است. چاپگرها و
                                    متون بلکه روزنامه و مجله در ستون و سطرآنچنان
                                    که لازم است و برای شرایط فعلی تکنولوژی مورد
                                    نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                                    کاربردی می باشد. کتابهای زیادی در شصت و سه
                                    درصد گذشته، حال و آینده شناخت فراوان جامعه و
                                    متخصصان را می طلبد تا با نرم افزارها شناخت
                                    بیشتری را برای طراحان رایانه ای علی الخصوص
                                    طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
                                    ایجاد کرد. در این صورت می توان امید داشت که
                                    تمام و دشواری موجود در ارائه راهکارها و
                                    شرایط سخت تایپ به پایان رسد وزمان مورد نیاز
                                    شامل حروفچینی دستاوردهای اصلی و جوابگوی
                                    سوالات پیوسته اهل دنیای موجود طراحی اساسا
                                    مورد استفاده قرار گیرد.
                                </p>
                            </div>
                        </div>
                    </LazyMotionXReverse>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
