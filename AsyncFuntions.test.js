const isUtensilAvailable = require('./AsyncFunctions')

describe('Test async function', () => {
	it('input [fork, knife, spoon] to be equal [fork, knife, spoon]', async () => {
		const result = await isUtensilAvailable('fork')
		expect(result).toBe(true)
	})
	it('will return an error if the utensil is not found', async () => {
		await expect(isUtensilAvailable('tree')).rejects.toEqual(
			'No utensils found.'
		)
	})
})
