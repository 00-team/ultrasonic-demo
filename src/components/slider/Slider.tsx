import React, { FC, useState, useEffect } from 'react'

// style
import './sass/slider.scss'

import { GrFormNext } from '@react-icons/all-files/gr/GrFormNext'
import { GrFormPrevious } from '@react-icons/all-files/gr/GrFormPrevious'

interface SliderProps {
    children: React.ReactNode[]
}

interface RenderObject {
    content: React.ReactNode
    index: number
}

const Transition = (index: number, tr: string = 'none') => {
    document.querySelector<HTMLDivElement>(
        'div.cards-container'
    )!.style.transition = tr

    document.querySelector<HTMLDivElement>(
        `div.card[data-index="${index}"]`
    )!.style.transition = tr
}

const Slider: FC<SliderProps> = ({ children }) => {
    const [Cndex, setCndex] = useState(0)
    const [inTimeOut, setinTimeOut] = useState(false)

    const [RenderData, setRenderData] = useState<RenderObject[]>([])

    useEffect(() => {
        setRenderData([
            { content: children.at(-3), index: -3 },
            { content: children.at(-2), index: -2 },
            { content: children.at(-1), index: -1 },

            ...children.map((item, index) => {
                return { content: item, index: index }
            }),

            { content: children.at(0), index: children.length + 0 },
            { content: children.at(1), index: children.length + 1 },
            { content: children.at(2), index: children.length + 2 },
        ])
    }, [])

    const ChangeCndex = (signal: 1 | -1) => {
        if (inTimeOut) return

        let temp_cndex = Cndex + signal

        if (temp_cndex <= children.length && temp_cndex >= -1)
            setCndex(temp_cndex)

        if (temp_cndex >= children.length) {
            setinTimeOut(true)
            setTimeout(() => {
                Transition(0)
                setCndex(0)
                setTimeout(() => {
                    Transition(0, '')
                    setinTimeOut(false)
                }, 400)
            }, 400)
        } else if (temp_cndex < 0) {
            setinTimeOut(true)
            setTimeout(() => {
                Transition(children.length - 1)
                setCndex(children.length - 1)
                setTimeout(() => {
                    Transition(children.length - 1, '')
                    setinTimeOut(false)
                }, 400)
            }, 400)
        }
    }

    return (
        <div className='slider-container'>
            {/* only for debug */}
            {/* <div className='line'></div> */}

            <div className='slider'>
                <div
                    className='cards-container'
                    style={{
                        transform: `translateX(calc((${
                            children.length * 600
                        }px + ${children.length - 1}rem) / 2 - (600px / 2) + ${
                            Cndex * -600
                        }px - ${Cndex * 1}rem))`,
                    }}
                >
                    {RenderData.map((item, index) => (
                        <div
                            key={index}
                            data-index={item.index}
                            className={`card${
                                item.index === Cndex ? ' C' : ''
                            }`}
                        >
                            {item.content}
                        </div>
                    ))}
                </div>
                <div className='btns'>
                    <div className='previous' onClick={() => ChangeCndex(-1)}>
                        <GrFormPrevious size={50} />
                    </div>
                    <div className='next' onClick={() => ChangeCndex(1)}>
                        <GrFormNext size={50} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider
