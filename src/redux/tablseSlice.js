import { createSlice } from '@reduxjs/toolkit'

export const tableSlice = createSlice({
    name: 'table',
    initialState: {
        counter: 0,
    },
    reducers: {
        setCounter: (state, action) => {
            state.counter += 1
        },
    },
    extraReducers: {},
})

const { actions, reducer } = tableSlice

export const { setCounter } = actions
export default reducer