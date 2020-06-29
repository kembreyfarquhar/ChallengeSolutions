/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  //if the number is less than 0, the "-" character will prohibit it from being a palindrome
  if (x < 0) {
    return false;
  }

  //use the mathematical way of calculating and pushing all digits into an array
  let numList = [];
  while (x > 0) {
    numList.unshift(x % 10);
    x = (x / 10) | 0;
  }

  //create mid index of floor division of length of the array
  let mid = Math.floor(numList.length / 2);
  let right;

  //if the length of the array is even, splice from mid on
  //otherwise, splice from mid+1 on (ignoring the middle digit)
  if (numList.length % 2 == 0) {
    right = numList.splice(mid);
  } else {
    right = numList.splice(mid + 1);
  }

  //left will be from 0 to mid
  let left = numList.splice(0, mid);
  right.reverse();

  //if right (reversed) matches left, the number is a palindrome
  if (right.join("") == left.join("")) {
    return true;
  }
  //if they don't match, the number is not a palindrome
  return false;
};
