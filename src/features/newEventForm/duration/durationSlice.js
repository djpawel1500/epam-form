import { createSlice } from '@reduxjs/toolkit'

export const durationSlice = createSlice({
	name: 'duration',
	initialState: {
		value: '',
	},
	reducers: {
		setValue: (state, action) => {
			state.value = Math.abs(Number(action.payload))
		},
	},
})

export const { setValue } = durationSlice.actions

export const selectValue = (state) => state.duration.value

export default durationSlice.reducer
