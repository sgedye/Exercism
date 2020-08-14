const dnaToRna = { 'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U' };
type DNA = 'G' | 'C' | 'T' | 'A';

class Transcriptor {
    toRna(dna: string): string {
        let rna = '';
        for (const char of dna) {
            if ('GCTA'.includes(char)) {
                rna += dnaToRna[char as DNA];
            } else {
                throw new Error("Invalid input DNA.");
            }
        }
        return rna;
    }
}

export default Transcriptor;