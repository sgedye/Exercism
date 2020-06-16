const dnaToRna = { 'G' : 'C', 'C' : 'G', 'T' : 'A', 'A' : 'U' }
type DNA = 'G' | 'C' | 'T' | 'A'

class Transcriptor {
    toRna( dna: DNA | DNA[] ): string {
        if (dna.length === 1) {
            return dnaToRna[dna]
        }
        let rna = ''
        for (let i=0; i<dna.length; i++) {
            rna += dnaToRna[dna[i]]
        }   return rna
    }
}

export default Transcriptor