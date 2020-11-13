import { createSlice } from '@reduxjs/toolkit'

export const startsonSlice = createSlice({
	name: 'startson',
	initialState: {
		date: '',
		time: '',
	},
	reducers: {
		setDate: (state, action) => {
			state.date = action.payload
		},
		setTime: (state, action) => {
			state.time = action.payload
		},
	},
})

export const { setDate, setTime } = startsonSlice.actions

export const selectDate = (state) => state.startson.date
export const selectTime = (state) => state.startson.time

export default startsonSlice.reducer
