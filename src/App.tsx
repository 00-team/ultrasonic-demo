import React, { FC } from 'react'

// commons
import Head from './components/common/Head'

// main styles 
import './sass/index.scss'
import './sass/fonts/imports.scss'

// navbar 
import Navbar from './layouts/Navbar'

// footer 
import Footer from './layouts/Footer'

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
            <Footer />
        </>
    )
}

App.defaultProps = defaultProps

export default App
