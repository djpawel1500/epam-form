import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from './app/store'
import App from './App'

test('renders form submit', () => {
	const tree = render(
		<Provider store={store}>
			<App />
		</Provider>
	)
	expect(tree).toMatchSnapshot()
	// console.log(tree.toJSON())
	// const { getByText } = render(
	// 	<Provider store={store}>
	// 		<App />
	// 	</Provider>
	// )

	// expect(getByText(/Publish event/i)).toBeInTheDocument()
})
