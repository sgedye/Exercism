export class Triangle {
  constructor(x, y, z) {
  	this.x = x
  	this.y = y
  	this.z = z
  }

  isEquilateral() {
    // Check for sides greater than zero
    // Check for inequality violations
    // Cheak if all sides are equal
    return ((this.x > 0 || this.y > 0 || this.z > 0) &&
            (this.x <= this.y + this.z && this.y <= this.x + this.z && this.z <= this.x + this.y) &&
            (this.x === this.y && this.x === this.z && this.y === this.z))
  }

  isIsosceles() {
    // Check for sides greater than zero
    // Check for inequality violations
    // Cheak if any two sides are equal (NB: equalaterals are also isosceles)
    return ((this.x > 0 || this.y > 0 || this.z > 0) &&
            (this.x <= this.y + this.z && this.y <= this.x + this.z && this.z <= this.x + this.y) &&
            (this.x === this.y || this.x === this.z || this.y === this.z))
  }

  isScalene() {
    // Check for sides greater than zero
    // Check for inequality violations
    // Cheak if no sides are equal
    return ((this.x > 0 || this.y > 0 || this.z > 0) &&
            (this.x <= this.y + this.z && this.y <= this.x + this.z && this.z <= this.x + this.y) &&
            (this.x !== this.y && this.x !== this.z && this.y !== this.z))
  }
}
