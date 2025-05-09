import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dark: false,
};


export const themeSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    SetTheme: (state) => {
      state.dark = !state.dark
      console.log("redux work" ,state.dark);
    },
  }
})

export const { SetTheme } = themeSlice.actions

export default themeSlice.reducer