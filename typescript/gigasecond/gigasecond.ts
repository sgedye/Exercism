const gigaSecondInMs = 1000000000000;

export default class Gigasecond {
  private time: Date;
  public constructor(time: Date) {
    this.time = new Date(time);
  }
  date(): Date {
    const newTime = this.time.valueOf() + gigaSecondInMs
    return new Date(newTime);
  }
}