/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const openers = ["(", "{", "["];
  const closers = [")", "}", "]"];
  const pairs = { "(": ")", "{": "}", "[": "]" };

  let stack = [];

  //loop through the string characters
  for (let i = 0; i < s.length; i++)
    //if the character is an opening bracket, push it onto the stack
    if (openers.includes(s[i])) {
      stack.push(s[i]);
    } else {
      //if the character is a closing bracket and it does not equal the latest
      //opening bracket in the stack, return false (not balanced)
      if (closers.includes(s[i]) && pairs[stack.pop()] !== s[i]) {
        return false;
      }
    }

  //if the stack is empty this will return true, if not it will return false (not balanced)
  return stack.length == 0;
};
