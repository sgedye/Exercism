export const toRoman = number => {
  let romanNumeral = ''
  while (number > 0) {
    switch(true) {
      case (number >= 1000):
        number -= 1000
        romanNumeral += 'M'
        break
      case (number >= 900):
        number -= 900
        romanNumeral += 'CM'
        break
      case (number >= 500):
        number -= 500
        romanNumeral += 'D'
        break
      case (number >= 400):
        number -= 400
        romanNumeral += 'CD'
        break
      case (number >= 100):
        number -= 100
        romanNumeral += 'C'
        break
      case (number >= 90):
        number -= 90
        romanNumeral += 'XC'
        break
      case (number >= 50):
        number -= 50
        romanNumeral += 'L'
        break
      case (number >= 40):
        number -= 40
        romanNumeral += 'XL'
        break
      case (number >= 10):
        number -= 10
        romanNumeral += 'X'
        break
      case (number >= 9):
        number -= 9
        romanNumeral += 'IX'
        break
      case (number >= 5):
        number -= 5
        romanNumeral += 'V'
        break
      case (number >= 4):
        number -= 4
        romanNumeral += 'IV'
        break
      case (number >= 1):
        number -= 1
        romanNumeral += 'I'
        break
    }
  }
  return romanNumeral
}