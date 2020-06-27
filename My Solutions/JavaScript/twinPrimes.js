function isTwinPrime(n) {
  //creates a function that checks if the number passed in is prime
  const isPrime = num => {
    //setting a count to manipulate later in the loop
    let count = 0;

    //loop over the number provided in the argument
    for (let i = 0; i < num; i++) {
      //prime numbers will only be divisible by themselves and 1 (leaving a remainder of zero only in those two instances)
      //i is less than num, so the loop won't check the number itself, only the values from 0 leading up to it
      //therefore, prime numbers will only have an instance of 0 remainder after division ONE time, no more
      //store instances of a 0 remainder in the count variable
      if (num % i === 0) {
        count += 1;
      }
      //if the count variable reaches a value greater than 1, the number is not prime, so break the loop
      if (count > 1) {
        break;
      }
    }
    //if count does not equal 1, return false
    //else, return true
    return count !== 1 ? false : true;
  };

  //send n to isPrime function to store the boolean value determining if it is a prime number
  let result = isPrime(n);

  //if n is prime, send the values of n+2 and n-2 to isPrime
  if (result === true) {
    const sub = isPrime(n - 2);
    const add = isPrime(n + 2);

    //if neither is a prime number set result to false
    if (sub === false && add === false) {
      result = false;
    }
  }

  //result will be initially set on whether n is prime
  //if it isn't, result will be false and nothing else will be computed, result (false) will be returned
  //if n is prime, result is true, then checks are performed on the value +2 and -2, if either is true then result will be true
  return result;
}
