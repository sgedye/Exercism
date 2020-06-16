const PROTEIN_CODON = {
  'Methionine' : ['AUG'],
  'Phenylalanine' : ['UUU', 'UUC'],
  'Leucine' : ['UUA', 'UUG'],
  'Serine': ['UCU', 'UCC', 'UCA', 'UCG'],
  'Tyrosine': ['UAU', 'UAC'],
  'Cysteine': ['UGU', 'UGC'],
  'Tryptophan': ['UGG'],
  'STOP': ['UAA', 'UAG', 'UGA']
}

export const translate = (rna = '') => {
  let codons = rna.match(/.{1,3}/g) || []
  codons.forEach(codon => {
    if (Object.values(PROTEIN_CODON).flat(Infinity).indexOf(codon) === -1) {
      throw new Error('Invalid codon')
    }
  })
  let proteins = codons
    .map(codon => Object.keys(PROTEIN_CODON).filter(key => PROTEIN_CODON[key].includes(codon)))
    .flat(Infinity)
  let stopIndex = proteins.indexOf('STOP')
  return (stopIndex < 0) ? proteins : proteins.splice(0, stopIndex)
}
