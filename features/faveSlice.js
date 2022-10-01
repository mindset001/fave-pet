import { createSlice } from "@reduxjs/toolkit";

export const faveSlice = createSlice({
    name: 'now',
    initialState: {
       fave: []     
    },

    reducers: {
        change: (state, actions) =>   {
            state.fave = actions.payload
        },
        

      

    }
})

export const { change  } = faveSlice.actions

  export default faveSlice.reducer