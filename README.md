# Code Challenge Solutions

This is a small, yet growing, collection of solutions that I've concocted for various code challenges. I created this repository with intentions to 1) have an organized collection of my solutions, 2) force myself to explain said solutions, ensuring that I understand why/how the solutions works, and 3) to revisit said solutions at a later date, utilizing my ever-growing coding abilities to determine if/how I could solve them in a better/more efficient manner. :dancer:

created by [@kmcknight1](https://github.com/kmcknight1)

#

### Table of Contents

- [Stack Machine](#stack-machine)
- [Twin Primes](#twin-primes)
- [Longest String](#longest-string)
- [Reverse String](#reverse-string)
- [Reverse Number](#reverse-number)
- [Reverse Case](#reverse-case)

#

### Stack Machine

- [**See Solution**](https://github.com/kmcknight1/ChallengeSolutions/blob/master/My%20Solutions/stackMachine.js)

A stack machine is a simple system that performs arithmetic operations on an input string of numbers and operators. It contains a stack that can store an arbitrary number of 12-bit unsigned integers. Initially the stack is empty. The machine processes a string of characters in the following way:

- the characters of the string are processed one by one

- if the current character is a digit `[0-9]`, the machine pushes the value of that digit onto its stack

- if the current character is `+`, the machine pops the two topmost values from its stack, adds them and pushes the result onto the stack

- if the current character is `*`, the machine pops the two topmost values from its stack, multiplies them and pushes the result onto the stack

- after the machine has processed the whole string it returns the topmost value of its stack as the result

- the machine reports an error if any operation it performs (addition or multiplication) results in an overflow

- the machine reports an error if it tries to pop an element from its stack when the stack is empty, or if the stack is empty after the machine has processed the whole string.

For example, given the string `"13+62*7+*"` the machine will perform the following operations:

| character | comment                | stack    |
| --------- | ---------------------- | -------- |
|           |                        | empty    |
| '1'       | push 1 onto the stack  | 1        |
| '3'       | push 3 onto the stack  | 1, 3     |
| '+'       | perform addition       | 4        |
| '6'       | push 6 onto the stack  | 4, 6     |
| '2'       | push 2 onto the stack  | 4, 6, 2  |
| '\*'      | perform multiplication | 4, 12    |
| '7'       | push 7 onto the stack  | 4, 12, 7 |
| '+'       | perform addition       | 4, 19    |
| '\*'      | perform multiplication | 76       |

The machine will return **76** as the result as it is the topmost element of its stack.Write a function that, given a string S consisting of N characters containing input for the stack machine, returns the result the machine would return if given this string. The function should return -1 if the machine would report an error when processing the string.For example, given String `S = "13+62*7+*"` the function should return **76**, as explained in the example above. Given String `S = "11++"` the function should return **-1**.

**Assume that**

- the length of S is within the range `[0..200,000]`

- string S consists only of characters `[0-9]`, `+` and/or `*`.

#

### Twin Primes

A twin prime is a prime number that differs from another prime number by two. Write a function called isTwinPrime which takes an integer and returns true if it is a twin prime, or false if it is not.

**Example:**

- 5 is a prime, and 5 + 2 = 7, which is also a prime, so returns `true`.

- 9 is not a prime, and so does not need checking, so it returns `false`.

- 7 is a prime, but 7 + 2 = 9, which is not a prime. However, 7 - 2 = 5, which is a prime, so it returns `true`.

- 23 is a prime, but 23 + 2 is 25, which is not a prime. 23 - 2 is 21, which isn't a prime either, so 23 is not a twin prime, return `false`.

[**SEE SOLUTION**](https://github.com/kmcknight1/ChallengeSolutions/blob/master/My%20Solutions/twinPrimes.js)

#

### Longest String

Write a function that takes an array of strings and return the longest string in the array.

**For example:**

```javascript
const strings1 = ["short", "really, really long!", "medium"];
console.log(longestString(strings1)); // <--- 'really, really long!'
```

Edge case: If you had an array which had two "longest" strings of equal length, your function should just return the first one.

[**SEE SOLUTION**](https://github.com/kmcknight1/ChallengeSolutions/blob/master/My%20Solutions/longestString.js)

#

### Reverse String

Write a function called reverseString that accepts a string and returns a reversed copy of the string.

**For Example:**

| Input         | Output        |
| ------------- | ------------- |
| 'hello world' | 'dlrow olleh' |
| 'asdf'        | 'fdsa'        |
| 'CS rocks!'   | '!skcor SC'   |

[**SEE SOLUTION**](https://github.com/kmcknight1/ChallengeSolutions/blob/master/My%20Solutions/reverseString.js)

#

### Reverse Number

Write a function called reverseNumber that reverses a number.

**For Example:**

| Input | Output |
| ----- | ------ |
| 12345 | 54321  |
| 555   | 555    |

[**SEE SOLUTION**](https://github.com/kmcknight1/ChallengeSolutions/blob/master/My%20Solutions/reverseNumber.js)

#

### Reverse Case

Write a function that takes in a string, reverses the 'casing' of that string, and returns the "reversed-casing" string.

**For Example:**

```javascript
const string = "HELLO world!";
console.log(reverseCase(string)); // <--- hello WORLD!
```

[**SEE SOLUTION**](https://github.com/kmcknight1/ChallengeSolutions/blob/master/My%20Solutions/reverseCase.js)
