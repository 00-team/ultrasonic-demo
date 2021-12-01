import React from 'react'

// style
import './sass/blogs.scss'

// utils
import { LazyMotionY } from '../components/common/LazyMotion'

const Blogs = () => {
    return (
        <div className='blog'>
            <div className='container'>
                <LazyMotionY>
                    <h2 className='title'>بلاگ </h2>
                </LazyMotionY>
            </div>
        </div>
    )
}

export default Blogs
