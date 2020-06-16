export default class Words {
  public count(phrase = ''): Map<string, number> {
    const wordList = this.getWordArray(phrase)
    return this.getWordCount(wordList)
  }
  private getWordArray(phrase: string): Array<string> {
    return phrase.trim().toLowerCase().split(/\s+/)
  }
  private getWordCount(wordList: Array<string>): Map<string, number> {
    const tuple = new Map()
    wordList.forEach(word => tuple.has(word) ? tuple.set(word, tuple.get(word) + 1) : tuple.set(word, 1))
    return tuple
  }
}