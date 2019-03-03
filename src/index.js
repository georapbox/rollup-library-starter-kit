import { LIB_NAME, LIB_VERSION } from './constants';

class Library {
  constructor() {
    this._name = LIB_NAME;
    this.version = LIB_VERSION;
  }

  name() {
    return this._name;
  }
}

export default Library;
