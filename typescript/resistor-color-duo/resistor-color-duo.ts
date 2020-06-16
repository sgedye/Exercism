type Color = 'black' | 'brown' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'grey' | 'white';

const COLOR_TO_NUMBER = {
  'black': 0,
  'brown': 1,
  'red': 2,
  'orange': 3,
  'yellow': 4,
  'green': 5,
  'blue': 6,
  'violet': 7,
  'grey': 8,
  'white': 9
}

export class ResistorColor {
  private colors: [Color, Color];

  constructor(colors: Array<Color>) {
    this.colors = [colors[0], colors[1]] || this.toThrowError();
    console.log(this.colors)
  }

  private toThrowError = (): never => {
    throw new Error("At least two colors need to be present");
  }

  value = (): number => {
    const tens = COLOR_TO_NUMBER[this.colors[0]];
    const ones = COLOR_TO_NUMBER[this.colors[1]];
    return tens * 10 + ones;
  };
}