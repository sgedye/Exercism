export const transform = legacyScoring => {
  let newScoring = {}
  for (let [points, letters] of Object.entries(legacyScoring)) {
    letters.forEach(letter => {
      letter = letter.toLowerCase()
      newScoring[letter] = Number(points)
    })
  }  
  return newScoring
}