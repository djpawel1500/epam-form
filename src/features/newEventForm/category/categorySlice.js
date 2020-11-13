import { createSlice } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
	name: 'category',
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
			state.value = -1
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
} = categorySlice.actions

export const selectValue = (state) => state.category.value
export const selectItems = (state) => state.category.items
export const selectItemsError = (state) => state.category.itemsError

export const fetchItems = () => async (dispatch) => {
	try {
		const res = await fetch(process.env.REACT_APP_CATEGORIES_URL)
		const items = await res.json()
		dispatch(getItemsSuccess(items))
	} catch (err) {
		dispatch(getItemsError())
	}
}

export default categorySlice.reducer
