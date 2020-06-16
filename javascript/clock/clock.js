const SECONDS_IN_DAY = 60 * 24

export class Clock {
  constructor(hours = 0, minutes = 0) {    
    this.minute = this.checkMinutes(hours * 60 + minutes)
  }

  plus(minutes) {
    this.minute = this.checkMinutes(this.minute + minutes)
    return this
  }

  minus(minutes) {
    this.minute = this.checkMinutes(this.minute - minutes)
    return this
  }

  checkMinutes(minutes) {
    if (minutes < 0) {
      minutes = (minutes % SECONDS_IN_DAY) + SECONDS_IN_DAY
    }
    if (minutes >= SECONDS_IN_DAY) {
      minutes = minutes % SECONDS_IN_DAY
    }
    return minutes
  }

  equals(clock) {
    return (this.minute === clock.minute)
  }

  toString() {
    let hours = (Math.floor(this.minute / 60)) % 24
    let minutes = (this.minute % 60)
    hours = hours.toString().padStart(2, '0')
    minutes = minutes.toString().padStart(2, '0')
    return `${hours}:${minutes}`
  }
}