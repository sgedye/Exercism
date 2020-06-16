export const score = (x, y) => {
	const dist = Math.sqrt((x * x) + (y * y))
	let points
	switch(true) {
		case dist <= 1:
			points = 10
			break
		case dist <= 5:
			points = 5
			break
		case dist <= 10:
			points = 1
			break
		default:
			points = 0
	}
	return points
}