class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string') {
      throw new TypeError('Brand Must Be String');
    }
    if (typeof motor !== 'string') {
      throw new TypeError('Motor Must Be String');
    }
    if (typeof color !== 'string') {
      throw new TypeError('Color Must Be String');
    }
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
export default Car;
