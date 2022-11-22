const filterArray = require('./functions')
const isUtensilAvailable = require('./functions')

describe('filterArray', () => {
	it('input is null -> return null', () => {
		expect(filterArray(null)).toBeNull()
	})

	it('input: [1,2,3,4], output [1,2,3,4]', () => {
		expect(filterArray([1, 2, 3, 4])).toEqual(
			expect.arrayContaining([1, 2, 3, 4])
		)
		expect(filterArray([1, 2, 3, 4]).length).toEqual(4)
	})

	it('input: [50,75,100,125], output [50,75,100,100]', () => {
		expect(filterArray([50, 75, 100, 125])).not.toContain(125)
	})
})

describe('Test async function', () => {
	it('input [fork, knife, spoon] to be equal [fork, knife, spoon]', async () => {
		const result = await isUtensilAvailable('fork')
		expect(result).toBe(true)
	})
})
