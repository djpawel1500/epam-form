import { createSlice } from '@reduxjs/toolkit'

export const descriptionSlice = createSlice({
	name: 'description',
	initialState: {
		value: '',
	},
	reducers: {
		setValue: (state, action) => {
			state.value = action.payload.trim() === '' ? '' : action.payload
		},
	},
})

export const { setValue } = descriptionSlice.actions

export const selectValue = (state) => state.description.value

export default descriptionSlice.reducer
