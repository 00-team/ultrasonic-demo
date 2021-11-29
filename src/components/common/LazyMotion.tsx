import React, { useEffect, useRef, useState, RefObject } from 'react'
import { motion, useAnimation } from 'framer-motion'

import "./sass/lazymotion.scss"

const useOnScreen = (
    ref: RefObject<HTMLDivElement>,
    rootMargin: string = '0px'
) => {
    const [isIntersecting, setIntersecting] = useState(false)

    useEffect(() => {
        let currentRef: HTMLDivElement | null = null
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry) setIntersecting(entry.isIntersecting)
            },
            {
                rootMargin,
            }
        )
        if (ref.current) {
            currentRef = ref.current
            observer.observe(currentRef)
        }
        return () => {
            if (currentRef) observer.unobserve(currentRef)
        }
    }, [ref, rootMargin])

    return isIntersecting
}

interface LazyMotionProps {
    children: React.ReactElement
}

export const LazyMotionY = ({ children }: LazyMotionProps) => {
    const controls = useAnimation()
    const rootRef = useRef<HTMLDivElement>(null)
    const onScreen = useOnScreen(rootRef)
    useEffect(() => {
        if (onScreen) {
            controls.start({
                y: 0,
                opacity: 1,
                transition: {
                    duration: 1,
                    ease: 'easeOut',
                },
            })
        }
    }, [onScreen, controls])
    return (
        <motion.div
            className='lazy-div'
            ref={rootRef}
            initial={{ opacity: 0, y: 100 }}
            animate={controls}
        >
            {children}
        </motion.div>
    )
}

export const LazyMotionX = ({ children }: LazyMotionProps) => {
    const controls = useAnimation()
    const rootRef = useRef<HTMLDivElement>(null)
    const onScreen = useOnScreen(rootRef)
    useEffect(() => {
        if (onScreen) {
            controls.start({
                x: 0,
                opacity: 1,
                transition: {
                    duration: 1,
                    ease: 'easeOut',
                },
            })
        }
    }, [onScreen, controls])
    return (
        <motion.div
            className='lazy-div'
            ref={rootRef}
            initial={{ opacity: 0, x:-90, }}
            animate={controls}
        >
            {children}
        </motion.div>
    )
}

export const LazyMotionXReverse = ({ children }: LazyMotionProps) => {
    const controls = useAnimation()
    const rootRef = useRef<HTMLDivElement>(null)
    const onScreen = useOnScreen(rootRef)
    useEffect(() => {
        if (onScreen) {
            controls.start({
                x: 0,
                opacity: 1,
                transition: {
                    duration: 1,
                    ease: 'easeOut',
                },
            })
        }
    }, [onScreen, controls])
    return (
        <motion.div
            className='lazy-div'
            ref={rootRef}
            initial={{ opacity: 0, x: 90 }}
            animate={controls}
        >
            {children}
        </motion.div>
    )
}


