const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push('( ' + value + ' )');
    return this;
  },
  removeLink(position) {
    try {
      if (!Number.isInteger(position) || position < 0) throw new TypeError("Is not valid number");
    } catch (e) {
      // alert(e);
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    return this.arr.join('--');
  }
};

module.exports = chainMaker;
