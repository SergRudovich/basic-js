const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;

  let numberFromStr = Number(sampleActivity);
  let result = 0;

  if (typeof (sampleActivity) !== 'string') return false;
  if (isNaN(numberFromStr) || (numberFromStr === 0)) return false;

  let k = Math.LN2 / HALF_LIFE_PERIOD;
  result = Math.log(MODERN_ACTIVITY / numberFromStr) / k;

  if (result < 0 || isNaN(result)) return false;

  return result;
};
