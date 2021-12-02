import React, { FC } from 'react'
import { render } from 'react-dom'

// redux stuff 
import { Provider as ReduxProvider } from 'react-redux'

import { store } from './redux'

// loadable
import Loadable from '@loadable/component'

// router
import { BrowserRouter } from 'react-router-dom'

const App = Loadable(() => import('./App'))

const Root: FC = () => {
    return (
        <ReduxProvider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ReduxProvider>
    )
}

render(<Root />, document.getElementById('root'))
