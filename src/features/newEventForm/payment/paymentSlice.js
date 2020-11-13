import { createSlice } from '@reduxjs/toolkit'

export const paymentSlice = createSlice({
	name: 'payment',
	initialState: {
		fee: '',
		paid: false,
	},
	reducers: {
		setFee: (state, action) => {
			state.fee = Number(action.payload)
		},
		setPaid: (state, action) => {
			state.paid = Boolean(action.payload)
		},
	},
})

export const { setFee, setPaid } = paymentSlice.actions

export const selectFee = (state) => state.payment.fee
export const selectPaid = (state) => state.payment.paid

export default paymentSlice.reducer
