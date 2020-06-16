export const encode = str => {
	return str.replace(/(.)\1+/g, ($1, $2) => `${$1.length}${$2}`)
}

export const decode = str => {
	return str.replace(/(\d+)(\D)/g, ($1, $2, $3) => $3.repeat($2))
}