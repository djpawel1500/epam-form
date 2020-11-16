import title from './titleSlice'

describe('title reducer', () => {
	it('should handle initial state', () => {
		expect(title(undefined, {})).toEqual({ value: '' })
	})

	it('should handle title/setValue', () => {
		expect(
			title(
				{ value: '' },
				{
					type: 'title/setValue',
					payload: ' ',
				}
			)
		).toEqual({
			value: '',
		})

		expect(
			title(
				{ value: '' },
				{
					type: 'title/setValue',
					payload: 'title',
				}
			)
		).toEqual({
			value: 'title',
		})
	})
})
