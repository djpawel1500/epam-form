import { createSlice } from '@reduxjs/toolkit'

export const titleSlice = createSlice({
	name: 'title',
	initialState: {
		value: '',
	},
	reducers: {
		setValue: (state, action) => {
			state.value = action.payload.trim() === '' ? '' : action.payload
		},
	},
})

export const { setValue } = titleSlice.actions

export const selectValue = (state) => state.title.value

export default titleSlice.reducer
