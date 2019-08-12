function stackMachine(str) {
  //make an array out of the values provided in the string argument
  const arr = str.split("");
  //create "empty" result values to add to/manipulate later on
  const resultArr = [];
  let resultNum = 0;

  //loop through the array of values provided in the string argument
  for (let i = 0; i < arr.length; i++) {
    //if the value is a digit, push it into the result array
    if (parseInt(arr[i])) {
      resultArr.push(arr[i]);
    }
    //if the value is "+" or "*", check if there is more than one value in the result array,
    //if not, no calculation can be made, thus rendering an error; resultNum = -1, then break the loop
    //if so, continue to else statement
    else if (arr[i] === "+" || arr[i] === "*") {
      if (resultArr.length < 2) {
        resultNum = -1;
        break;
      }
      //there are > 2 items in the result array
      //the last two items in the array must be popped out of the array and turned into integers
      //performing either addition or multiplication (depending on the symbol given in the string argument)
      //with the two values, then pushing that value back onto the array
      else {
        const last = parseInt(resultArr.pop());
        const secondLast = parseInt(resultArr.pop());
        if (arr[i] === "+") {
          resultArr.push(last + secondLast);
        } else {
          resultArr.push(last * secondLast);
        }
      }
    }
  }

  //if resultNum is less than 0 then return resultNum (this will only be true if an error occurs and resultNum is changed to -1)
  //if resultNum is NOT less than 0, return the integer value of the result array
  return resultNum < 0 ? resultNum : parseInt(resultArr);
}
