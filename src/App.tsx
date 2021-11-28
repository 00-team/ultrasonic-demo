import React, { FC } from 'react'

// commons
import Head from './components/common/Head'

// main styles 
import './sass/index.scss'
import './sass/fonts/imports.scss'

// navbar 
import Navbar from './layouts/Navbar'

// screens
import Home from './screens/Home'

interface AppProps {}

const defaultProps: AppProps = {}

const App: FC = () => {
    return (
        <>
            <Head />
            <Navbar />
            <main aria-label='main content'>
                <Home />
            </main>
        </>
    )
}

App.defaultProps = defaultProps

export default App
