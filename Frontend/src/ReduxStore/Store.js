import {configureStore} from '@reduxjs/toolkit'
import sidebarSliceReducer from './sidebarSlice.js'
import loginLogoutBarReducer from './loginLogoutBar.js'

export const store = configureStore({
    reducer:{
        sidebar :sidebarSliceReducer,
        loginLogoutBar : loginLogoutBarReducer,
    }
})





