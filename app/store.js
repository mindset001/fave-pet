import { configureStore } from '@reduxjs/toolkit'
import faveSlice from '../features/faveSlice'

export const store = configureStore({
  reducer: {
    faveSlice: faveSlice
  },

})