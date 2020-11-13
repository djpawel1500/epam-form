export const selectFormData = (state) => {
	const formData = {
		title: state.title.value,
		description: state.description.value,
		paid_event: state.payment.paid,
		reward: state.reward.value || 0,
		date: `${state.startson.date}T${state.startson.time}`,
		coordinator: {
			id: `${state.coordinator.value}`,
			email: state.coordinator.items?.find(
				(item) => item.id === state.coordinator.value
			)?.email,
		},
	}
	if (state.category.value >= 0) {
		formData.category_id = state.category.value
	}
	if (state.payment.paid) {
		formData.event_fee = state.payment.fee
	}
	if (state.duration.value !== '') {
		formData.duration = Number(state.duration.value) * 3600
	}
	return formData
}
