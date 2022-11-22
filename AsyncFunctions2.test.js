const getUserById = require('./AsyncFunctions2')

describe('Text getUserById', () => {
	it('is id present in the list?', async () => {
		const data = await getUserById(5)
		expect(data).toEqual({
			id: 5,
			firstName: 'Ali',
			lastName: 'Ahmed',
		})
	})
	it('will return the user if the id is found', async () => {
		var userId = 2
		var result = await getUserById(userId)
		expect(result.id).toEqual(userId)
		expect(result.firstName).toEqual('Marlon')
		expect(result.lastName).toEqual('Cobb')
	})
	it('invalid id will be reject with an error', async () => {
		await expect(getUserById(1000)).rejects.toEqual(
			'User with ID ' + 1000 + ' not found.'
		)
	})
})
