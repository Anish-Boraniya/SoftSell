import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './Theme/themeslice'

export default configureStore({
  reducer: {
    theme: themeSlice
  }
})