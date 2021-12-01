import React from 'react'

// style
import './sass/blogs.scss'

// icons
import { RiArticleFill } from '@react-icons/all-files/ri/RiArticleFill'

// utils
import { LazyMotionY } from '../components/common/LazyMotion'

// blog card
import BlogCard from '../components/common/BlogCard'

// btn comp 
import { ButtonWithArrow } from '../components/common/Button'

const Blogs = () => {
    return (
        <div className='blog'>
            <div className='container'>
                <LazyMotionY>
                    <h2 className='title'>
                        <RiArticleFill />
                        مقالات
                        <RiArticleFill />
                    </h2>
                </LazyMotionY>
                <div className='wrapper'>
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
                <div className="see-more">
                    <ButtonWithArrow>دیدن همه مقالات</ButtonWithArrow>
                </div>
            </div>
        </div>
    )
}

export default Blogs
