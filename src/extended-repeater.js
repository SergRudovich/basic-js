const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let result = '';
  let repeatTimes = 0;
  let separator = '+';
  let addition = '';
  let additionRepeatTimes = 0;
  let additionSeparator = '|';
  str = String(str);
  if ("repeatTimes" in options && !(options.repeatTimes === undefined)) repeatTimes = Number(options.repeatTimes);
  if ("separator" in options) separator = String(options.separator);
  if ("addition" in options) addition = String(options.addition);
  if ("additionRepeatTimes" in options && !(options.additionRepeatTimes === undefined)) additionRepeatTimes = Number(options.additionRepeatTimes);
  if ("additionSeparator" in options) additionSeparator = String(options.additionSeparator);

  if (repeatTimes === 0) repeatTimes++;
  if (additionRepeatTimes === 0) additionRepeatTimes++;


  for (i = 0; i < repeatTimes; i++) {
    result += str;
    for (j = 0; j < additionRepeatTimes; j++) {
      result += addition;
      if (j < (additionRepeatTimes - 1)) result += additionSeparator;
    }
    if (i < (repeatTimes - 1)) result += separator;
  }


  return result;
}



