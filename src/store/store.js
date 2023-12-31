/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit'

import trackReducer from './slices/player'
// import trackReducer from './reducers/player';
import authReducer from './slices/auth'
import { tracksApi } from '../services/player'

export const store = configureStore({
  reducer: {
    player: trackReducer,
    auth: authReducer,
    [tracksApi.reducerPath]: tracksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tracksApi.middleware),
})
