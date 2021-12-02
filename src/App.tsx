import React, { FC, useEffect } from 'react'

// redux stuff 
import { useDispatch } from 'react-redux'
import { AppTypes } from './redux/models/App'

// commons
import Head from './components/common/Head'

import { Routes, Route } from 'react-router-dom'

// components
import Slider from './components/slider'

// main styles
import './sass/index.scss'
import './sass/fonts/imports.scss'

// navbar
import Navbar from './layouts/Navbar'

// footer
import Footer from './layouts/Footer'

// screens
import Home from './screens/Home'

const BaseData = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

interface AppProps {}

const defaultProps: AppProps = {}

const App: FC = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: AppTypes.SET_WINWID, payload: window.pageYOffset })
        window.onscroll = () => {
            dispatch({ type: AppTypes.SET_WINWID, payload: window.pageYOffset })
        }
    }, [dispatch])

    return (
        <>
            <Head />

            <main aria-label='main content'>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <>
                                <Navbar />
                                <Home />
                                <Footer />
                            </>
                        }
                    />

                    <Route
                        path='/test'
                        element={
                            <Slider>
                                {BaseData.map((item, index) => (
                                    <div key={index}>{item}</div>
                                ))}
                            </Slider>
                        }
                    />
                </Routes>
            </main>
        </>
    )
}

App.defaultProps = defaultProps

export default App
