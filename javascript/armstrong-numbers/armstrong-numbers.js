export const isArmstrongNumber = (num) => {
	let numArr = []
	let partial = num
	do {
		numArr.unshift(partial % 10)
		partial = Math.floor(partial / 10)
	}
	while (partial > 0)
	let total = 0;
	for (let i=0; i<numArr.length; i++) {
		total += Math.pow(numArr[i], numArr.length);
	}
	return (num === total)
};