const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  let result = '';

  if (!Array.isArray(members)) return false;

  for (i = 0; i < members.length; i++) {
    if (typeof (members[i]) === 'string') {
      members[i] = members[i].trim();
      result += members[i][0];
    }
  }

  return result.toUpperCase().split('').sort().join('');
};
