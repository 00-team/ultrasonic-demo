import React from 'react'

// style
import './sass/blogcard.scss'

// btn comp
import Button from './Button'

const BlogCard = () => {
    return (
        <div className='blog-card'>
            <div className='top'>
                <div className='author'>استاد خسرویان</div>
                <div className='date'>1400,9,9</div>
            </div>
            <h2 className='title'>عنوان مقاله</h2>
            <p className='description'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز،
            </p>
            <div className='see-more'>
                <Button
                    color={'#000'}
                    borderRadius={5}
                >
                    مطالب بیشتر
                </Button>
            </div>
        </div>
    )
}

export default BlogCard
