import React, { useState } from 'react'

// style
import './sass/videocard.scss'

// img
import imgDefault from '../../../static/imgs/shimi.jpg'

// icons
import { ImArrowUp2 } from '@react-icons/all-files/im/ImArrowUp2'
import { ButtonWithArrow } from './Button'

interface VideoCard {
    img?: string
    title?: string
    description?: string
    price?: number
}

const VideoCard = ({
    img,
    title = 'title',
    description = 'description',
    // price = 80000,
}: VideoCard) => {
    const [Active, setActive] = useState(false)

    return (
        <div
            className='video-card'
            onClick={() => setActive(!Active)}
            style={{
                // backgroundImage: img ? img : 'https://picsum.photos/1920/1080',
                backgroundImage: img ? `url(${img})` : `url(${imgDefault})`,
            }}
        >
            <div className={`details ${Active ? 'active' : ''}`}>
                <div className={`arrow ${Active ? 'up' : ''}`}>
                    <ImArrowUp2
                        size={24}
                        fill={'#fff'}
                        className='arrow-icon'
                    />
                </div>
                <div className='title'>
                    <div className='text'>{title}</div>
                </div>
                <div className='description'>{description}</div>
                <div className='card-button'>
                    <ButtonWithArrow borderRadius={5} border>
                        {' '}
                        دیدن دوره
                    </ButtonWithArrow>
                </div>
            </div>
        </div>
    )
}

// img
// title
// desc
// button

export default VideoCard
