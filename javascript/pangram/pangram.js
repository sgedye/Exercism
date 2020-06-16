const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

export const isPangram = word => {
  word = word.toLowerCase()
  return ALPHABET.split('').every(char => word.indexOf(char) !== -1)
}