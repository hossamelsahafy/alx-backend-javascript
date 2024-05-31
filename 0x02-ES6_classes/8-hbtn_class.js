class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('Size Must Be A Number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location Must Be A String');
    }
    this._size = size;
    this._location = location;
  }
  valueOf() {
    return this._size;
  }
  toString() {
    return this._location;
  }
}

export default HolbertonClass;
