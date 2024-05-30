class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('Name Must Be A String');
    }
    if (typeof code !== 'string') {
      throw new TypeError('Code Must Be A String');
    }
    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}

export default Airport;
