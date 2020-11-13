import { createSlice } from '@reduxjs/toolkit'

export const coordinatorSlice = createSlice({
	name: 'coordinator',
	initialState: {
		value: '',
		items: null,
		itemsError: null,
	},
	reducers: {
		setValue: (state, action) => {
			state.value = Number(action.payload)
		},
		getItemsSuccess: (state, action) => {
			state.itemsError = null
			state.value = ''
			state.items = action.payload
		},
		getItemsError: (state) => {
			state.itemsError = true
			state.value = ''
			state.items = null
		},
	},
})

export const {
	setValue,
	getItemsSuccess,
	getItemsError,
} = coordinatorSlice.actions

export const selectValue = (state) => state.coordinator.value
export const selectItems = (state) => state.coordinator.items
export const selectItemsError = (state) => state.coordinator.itemsError

export const fetchItems = () => async (dispatch) => {
	try {
		const res = await fetch(process.env.REACT_APP_COORDINATORS_URL)
		const items = await res.json()
		dispatch(getItemsSuccess(items))
	} catch (err) {
		dispatch(getItemsError())
	}
}

export default coordinatorSlice.reducer
