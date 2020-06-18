export default class Words {
  private wordsIn = (phrase: string): Array<string> => phrase.trim().toLowerCase().split(/\s+/)
  public count(phrase = ''): Map<string, number> {
    const tuple = new Map()
    this.wordsIn(phrase).forEach(word => tuple.has(word) ? tuple.set(word, tuple.get(word) + 1) : tuple.set(word, 1))
    return tuple
  }
}