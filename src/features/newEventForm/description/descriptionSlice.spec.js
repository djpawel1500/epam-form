import description from './descriptionSlice'

describe('description reducer', () => {
	it('should handle initial state', () => {
		expect(description(undefined, {})).toEqual({ value: '' })
	})

	it('should handle description/setValue', () => {
		expect(
			description(
				{ value: '' },
				{
					type: 'description/setValue',
					payload: ' ',
				}
			)
		).toEqual({
			value: '',
		})

		expect(
			description(
				{ value: '' },
				{
					type: 'description/setValue',
					payload: 'description',
				}
			)
		).toEqual({
			value: 'description',
		})
	})
})
