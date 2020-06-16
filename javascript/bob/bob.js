const checkShoutingQuestion = message => {
  return (message === message.toUpperCase()
    && message !== message.toLowerCase()
    && message.endsWith('?'))
}
const checkShouting = message => {
  return (message === message.toUpperCase()
    && message !== message.toLowerCase())
}
const checkQuestion = message => message.endsWith('?')

export const hey = (message = '') => {
  message = message.trim()
  if (!message) return `Fine. Be that way!`
  if (checkShoutingQuestion(message)) {
    return `Calm down, I know what I'm doing!`
  } else if (checkShouting(message)) {
    return `Whoa, chill out!`
  } else if (checkQuestion(message)) {
    return `Sure.`
  } else {
    return `Whatever.`
  }
}