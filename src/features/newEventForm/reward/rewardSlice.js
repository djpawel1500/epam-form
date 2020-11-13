import { createSlice } from '@reduxjs/toolkit'

export const rewardSlice = createSlice({
	name: 'reward',
	initialState: {
		value: '',
	},
	reducers: {
		setValue: (state, action) => {
			state.value = Math.abs(Number(action.payload))
		},
	},
})

export const { setValue } = rewardSlice.actions

export const selectValue = (state) => state.reward.value

export default rewardSlice.reducer
