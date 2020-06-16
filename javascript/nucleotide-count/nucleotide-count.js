export class NucleotideCounts {
  static parse(dna) {
    let nucleotides = [0, 0, 0, 0]
    nucleotides[0] = dna.split('').filter(char => char === 'A').length
    nucleotides[1] = dna.split('').filter(char => char === 'C').length
    nucleotides[2] = dna.split('').filter(char => char === 'G').length
    nucleotides[3] = dna.split('').filter(char => char === 'T').length
    if (dna.replace(/[A|C|G|T]/g, '').length > 0) {
      throw new Error("Invalid nucleotide in strand")
    }
    return [...nucleotides].toString().replace(/,/g, ' ')
  }
}