const isUtensilAvailable = require('./AsyncFunctions')

describe('Test async function', () => {
	it('input [fork, knife, spoon] to be equal [fork, knife, spoon]', async () => {
		const result = await isUtensilAvailable('fork')
		expect(result).toBe(true)
	})
})
