reverse = (x) => {
  //initialize result as 0
  result = 0;
  //spread all digits/characters into array
  list = [...x.toString()];
  //reverse the order of elementes in the array
  list.reverse();
  //if the last character is "-", pop it off and set result to a negative number
  //value of all the charachers joined together
  if (list[list.length - 1] == "-") {
    list.pop();
    result = -Number(list.join(""));
    //otherwise, set result to number value of all characters joined together
  } else {
    result = Number(list.join(""));
  }
  //if the result is larger than a 32-bit number, return 0
  if (result < Math.pow(-2, 31) || result > Math.pow(2, 31)) {
    return 0;
  }
  //otherwise, return the reversed number result
  return result;
};
