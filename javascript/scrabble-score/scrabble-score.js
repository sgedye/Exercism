const letterValues = {
  'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
  'D': 2, 'G': 2,
  'B': 3, 'C': 3, 'M': 3, 'P': 3,
  'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
  'K': 5,
  'J': 8, 'X': 8,
  'Q': 10, 'Z': 10
}

const getValue = (letter, bonus) => {
  let val = letterValues[letter] || 0
  if (bonus === 'double') {
    val *= 2
  } else if (bonus === 'triple') {
    val *= 3
  }
  return val
}

export const score = (word = '', letterBonus = [0, ''], wordBonus = '') => {
  word = word.toUpperCase()
  let score = 0
  for (let i=0; i<word.length; i++) {
    (letterBonus[0] - 1 === i) ?
      score += getValue(word[i], letterBonus[1]) :
      score += getValue(word[i], '')
  }
  return (wordBonus === 'double') ? score * 2 :
    (wordBonus === 'triple') ? score * 3 : score
}