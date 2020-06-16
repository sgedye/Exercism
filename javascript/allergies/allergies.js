const ALLERGIES = ['cats', 'pollen', 'chocolate', 'tomatoes', 'strawberries', 'shellfish', 'peanuts', 'eggs']

export class Allergies {
  constructor(allergyScore = 0) {
    this.allergyList = []
    let binaryScore = allergyScore.toString(2).padStart(8, '0').slice(-8)
    for (let i = 0; i < binaryScore.length; i++) {
      if (binaryScore[i] === '1') {
        this.allergyList.unshift(ALLERGIES[i])
      }
    }
  }

  list() {
    return this.allergyList
  }

  allergicTo(allergy) {
    return this.allergyList.includes(allergy)
   }
}


/*** Great Solution (not mine) ***/

// const ALLERGENS = {
//   eggs: 1,
//   peanuts: 2,
//   shellfish: 4,
//   strawberries: 8,
//   tomatoes: 16,
//   chocolate: 32,
//   pollen: 64,
//   cats: 128
// }

// export class Allergies {
//   constructor(value) {
//     this.value = value;
//   }

//   list() {
//     return Object.keys(ALLERGENS).filter(item => ALLERGENS[item] & this.value)
//   }

//   allergicTo(allergy) {
//     let x = this.list(this.value)
//     console.log(x)
//     return x.includes(allergy)
//   }
// }