const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

  let catsNumber = 0;

for (element of matrix) {
	for (item of element) {
    	if (item === '^^') catsNumber++;
    }
}

return catsNumber;
};
