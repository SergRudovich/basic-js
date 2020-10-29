const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    // value = String(value);
    this.arr.push('( ' + value + ' )');
    return this;
  },
  removeLink(position) {

    if (!Number.isInteger(position) || position < 0) {
      this.arr = [];
      throw new Error("Is not valid number");
    }


    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let result = this.arr.join('~~');
    this.arr = [];
    return result;
  }
};

module.exports = chainMaker;
