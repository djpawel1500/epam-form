import { configureStore } from '@reduxjs/toolkit'
import titleReducer from '../features/newEventForm/title/titleSlice'
import descriptionReducer from '../features/newEventForm/description/descriptionSlice'
import categoryReducer from '../features/newEventForm/category/categorySlice'
import paymentReducer from '../features/newEventForm/payment/paymentSlice'
import rewardReducer from '../features/newEventForm/reward/rewardSlice'
import coordinatorReducer from '../features/newEventForm/coordinator/coordinatorSlice'
import durationReducer from '../features/newEventForm/duration/durationSlice'
import startsonReducer from '../features/newEventForm/startson/startsonSlice'

export default configureStore({
	reducer: {
		title: titleReducer,
		description: descriptionReducer,
		category: categoryReducer,
		payment: paymentReducer,
		reward: rewardReducer,
		coordinator: coordinatorReducer,
		duration: durationReducer,
		startson: startsonReducer,
	},
})
