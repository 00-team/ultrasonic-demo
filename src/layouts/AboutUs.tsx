import React from 'react'

// icons
// import { GiSoundWaves } from '@react-icons/all-files/gi/GiSoundWaves'

// utils
import { LazyMotionX, LazyMotionXReverse } from '../components/common/LazyMotion'
import Bars from '../components/common/Bars'

// style
import './sass/about.scss'

const AboutUs = () => {
    return (
        <div className='about'>
            <div className='container'>
                <LazyMotionX>
                    {/* <h2 id='about' className="title">
                        <GiSoundWaves />
                        درباره ما
                        <GiSoundWaves />
                    </h2> */}
                    <h2 id='about' className='title'>
                        <Bars />
                        درباره ما
                        <Bars />
                    </h2>
                </LazyMotionX>
                <div className='wrapper'>
                    <LazyMotionX>
                        <div className='item reverse'>
                            <div className='img'>
                                <img
                                    src='https://picsum.photos/1920/1080'
                                    alt=''
                                />
                            </div>
                            <div className='text'>
                                <div className='header'>تحصیلات</div>
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
                                    src='https://picsum.photos/1920/1080'
                                    alt=''
                                />
                            </div>
                            <div className='text'>
                                <div className='header'>تحصیلات</div>
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
                                    src='https://picsum.photos/1920/1080'
                                    alt=''
                                />
                            </div>
                            <div className='text'>
                                <div className='header'>تحصیلات</div>
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
                                    src='https://picsum.photos/1920/1080'
                                    alt=''
                                />
                            </div>
                            <div className='text'>
                                <div className='header'>تحصیلات</div>
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
