const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let result = []; 

for (i=0; i<arr.length; i++){
	switch (arr[i]) {
      case '--discard-next': 
		result.push('del');
        i++;
      break;
      case '--discard-prev': 
		result.pop();
        result.push('del');
      break;
      case '--double-next': 
    if (i+1<arr.length) result.push(arr[i+1]);
 //   result.push(arr[i+1]);
      break;
      case '--double-prev': 
    result.push(result[i-1]);
    if (result[i-2]==='--double-next') result.push(result[i-1]);
    if (i===(arr.length-1)) result.push(result[i-1]);
      break;
      default:
      	result.push(arr[i]);
    }
    
}

for (i=0; i<result.length; i++){
  if (result[i]=== 'del'||result[i]=== undefined) {
  result.splice(i,1);
  i--;
  }
}


return result;
};
