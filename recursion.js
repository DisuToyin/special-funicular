function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

// console.log(factorial(2))

//Time Complixity: O(n)
// Sppace Complexity: O(n)

//using recursion to sum elements in an array
function sum(arr) {
  if (arr.length === 1) return arr[0];

  const rest = arr.slice(1);
  return arr[0] + sum(rest);
}

// console.log(sum([1, 2, 4, -3]))

// time: O(n^2)
// space: O(n)

function fastSum(arr) {
  return _fastSum(arr, 0);
}

function _fastSum(arr, idx) {
  console.log(`idx: ${idx}`);
  if (idx === arr.length) return 0;
  console.log(`arr[idx]: ${arr[idx]}`);
  return arr[idx] + _fastSum(arr, idx + 1);
}
// time: O(n)
// space: O(n)
// console.log(fastSum([1,2,3]))

// function reverse(s, start, end){
//     if (start >= end) return

//     let temp

//     temp = s[start];
//     s[start] = s[end];
//     s[end] = temp;

//     return reverse(s, start+1, end-1)

// }

// function reverseString(s){

//    return reverse(s, 0, s.length-1)

// }

// console.log(reverseString("h","e","l","l","o"))

// function sum(n){
//     if (n == 0) return 0

//     return sum(n-1)+n

// }

// console.log(sum(5))

function revStr(str, start, end) {
  if (start >= end) return;
  let temp;
  [str[start], str[end]] = [str[end], str[start]];

  return revStr(str, start + 1, end - 1);
}

function reversestr(str) {
  console.log(str);

  return revStr(str, 0, str.length - 1);
}

// console.log(reversestr("h","e","l","l","o"))
