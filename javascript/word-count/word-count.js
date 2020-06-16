export const countWords = sentence => {
  let counted = {}
  sentence
    .toLowerCase()
    .match(/\w+('t)?/g)
    .forEach(word => counted[word] = counted[word] + 1 || 1)
  return counted
}