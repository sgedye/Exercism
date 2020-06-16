const DNA_TO_RNA = {'G':'C', 'C':'G', 'T':'A', 'A':'U' }
export function toRna (dna) {
  return dna.replace(/\w/g, match => DNA_TO_RNA[match])
}