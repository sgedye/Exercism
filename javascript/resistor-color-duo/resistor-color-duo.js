export const decodedValue = colorArr => {
	let colOne = COLORS.indexOf(colorArr[0])
	let colTwo = COLORS.indexOf(colorArr[1])
	return colOne * 10 + colTwo
}

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]