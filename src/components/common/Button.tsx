import React, { ReactNode } from 'react'

// style
import './sass/button.scss'

// icons
import { HiOutlineArrowNarrowRight } from '@react-icons/all-files/hi/HiOutlineArrowNarrowRight'

interface ButtonProps {
    children?: ReactNode
    onClick?: (e: React.MouseEvent) => void
    classname?: string
    backgroundColor?: string
    color? : string
    borderRadius?: number
    border?: boolean
}

const defaultProps: ButtonProps = {
    onClick: () => {},
}

const Button = ({
    children,
    onClick,
    classname,
    backgroundColor,
    borderRadius,
    border,
}: ButtonProps) => {
    return (
        <button
            style={{
                backgroundColor: backgroundColor || 'none',
                borderRadius: borderRadius || 0,
                border: border ? '1px solid #fff' : 'none',
            }}
            className={`basic-button normal-button ${classname ? classname : ''}`}
            onClick={e => (onClick ? onClick(e) : {})}
        >
            {children}
        </button>
    )
}

export const ButtonWithBackGround = ({
    children,
    onClick,
    classname,
    backgroundColor,
    color,
    borderRadius,
    border,
}: ButtonProps) => {
    return (
        <button
            style={{
                color: color,
                backgroundColor: backgroundColor || 'none',
                borderRadius: borderRadius || 0,
                border: border ? '1px solid #fff' : 'none',
            }}
            className={`basic-button button ${classname ? classname : ''}`}
            onClick={e => (onClick ? onClick(e) : {})}
        >
            {children}
        </button>
    )
}

export const ButtonWithArrow = ({
    children,
    onClick,
    classname,
}: ButtonProps) => {
    return (
        <button
            className={`arrow-button basic-button ${
                classname ? classname : ''
            }`}
            onClick={e => (onClick ? onClick(e) : {})}
        >
            <div className='icon-arrow before'>
                <HiOutlineArrowNarrowRight />
            </div>
            <div className='label'>{children}</div>
            <div className='icon-arrow after'>
                <HiOutlineArrowNarrowRight />
            </div>
        </button>
    )
}

export const ButtonWithBorder = ({ children, onClick, classname }: ButtonProps) => {
    return (
        <button
            className={`btn hover-border-11 ${
                classname ? classname : ''
            }`}
            onClick={e => (onClick ? onClick(e) : {})}
        >
            <span> {children} </span>
        </button>
    )
}




Button.defaultProps = defaultProps

export default Button
