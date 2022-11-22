function filterArray(numbers) {
	if (numbers === null) {
		return null
	}
	return numbers?.map((n) => (n > 100 ? 100 : n))
}

module.exports = filterArray

const utensils = ['fork', 'knife', 'spoon']

function isUtensilAvailable(utensil) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			utensils.includes(utensil) ? resolve(true) : reject('No utensils found.')
		}, 2000)
	})
}

module.exports = isUtensilAvailable
