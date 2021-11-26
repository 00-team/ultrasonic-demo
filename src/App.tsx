import React, { FC } from 'react'

// commons
import Head from './components/common/Head'

interface AppProps {}

const defaultProps: AppProps = {}

const App: FC = () => {
    return (
        <>
            <Head />
            <div>App...</div>
        </>
    )
}

App.defaultProps = defaultProps

export default App
