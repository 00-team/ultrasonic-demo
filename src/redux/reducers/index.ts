import { combineReducers } from 'redux'

import App from './app'

export const reducers = combineReducers({
    App,
})

export type RootState = ReturnType<typeof reducers>
