// find recurring element in a array
function recurringElement(arr) {
  lookupObj = {};
  for (let i of arr) {
    if (lookupObj.hasOwnProperty(i)) {
      return i;
    }
    lookupObj[i] = 1;
  }
  return undefined;
}

console.log(recurringElement([2, 4, 3, 1]));
