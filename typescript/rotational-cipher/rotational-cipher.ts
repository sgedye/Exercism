const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz'
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export default class RotationalCipher {
  public static rotate(phrase: string, rot: number): string {
    return phrase.split('').map((char: string) => {
      let decodedChar: string
      if (LOWERCASE.includes(char)) {
        const INDEX = (LOWERCASE.indexOf(char) + rot) % 26
        decodedChar = LOWERCASE[INDEX]
      } else if (UPPERCASE.includes(char)) {
        const INDEX = (UPPERCASE.indexOf(char) + rot) % 26 
        decodedChar = UPPERCASE[INDEX]
      } else {
        decodedChar = char
      }
      return decodedChar
    }).join('')
  }
}