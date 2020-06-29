# Code Challenge Solutions

This is a small, yet growing, collection of solutions that I've created for various code challenges. I made this repository with intentions to 1) have an organized collection of my solutions, 2) force myself to explain said solutions, ensuring that I understand why/how the solutions works, and 3) to revisit said solutions at a later date, utilizing my ever-growing coding abilities to determine if/how I could solve them in a better/more efficient manner. :dancer:

created by [@kembreyfarquhar](https://github.com/kembreyfarquhar)

#

### Table of Contents

| JavaScript                                  | Python                                                |
| ------------------------------------------- | ----------------------------------------------------- |
| [**Reverse Integer**](#reverse-integer)     | [**Reverse Integer**](#reverse-integer)               |
| [**Stack Machine**](#stack-machine)         | [**Merge Two Sorted Lists**](#merge-two-sorted-lists) |
| [**Twin Primes**](#twin-primes)             | [**Palindrome Number**](#palindrome-number)           |
| [**Longest String**](#longest-string)       | [**Longest Common Prefix**](#longest-common-prefix)   |
| [**Reverse String**](#reverse-string)       |                                                       |
| [**Reverse Number**](#reverse-number)       |                                                       |
| [**Reverse Case**](#reverse-case)           |                                                       |
| [**Valid Parentheses**](#valid-parentheses) |                                                       |

#

### Stack Machine

:eyes: [See Solution](https://github.com/kembreyfarquhar/ChallengeSolutions/blob/master/My%20Solutions/JavaScript/stackMachine.js)

**Task:**

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

**Assume that:**

- the length of S is within the range `[0..200,000]`

- string S consists only of characters `[0-9]`, `+` and/or `*`.

#

### Twin Primes

:eyes: [See Solution](https://github.com/kembreyfarquhar/ChallengeSolutions/blob/master/My%20Solutions/JavaScript/twinPrimes.js)

**Task:**

A twin prime is a prime number that differs from another prime number by two. Write a function called isTwinPrime which takes an integer and returns true if it is a twin prime, or false if it is not.

**For Example:**

- 5 is a prime, and 5 + 2 = 7, which is also a prime, so returns `true`.

- 9 is not a prime, and so does not need checking, so it returns `false`.

- 7 is a prime, but 7 + 2 = 9, which is not a prime. However, 7 - 2 = 5, which is a prime, so it returns `true`.

- 23 is a prime, but 23 + 2 is 25, which is not a prime. 23 - 2 is 21, which isn't a prime either, so 23 is not a twin prime, return `false`.

#

### Longest String

:eyes: [See Solution](https://github.com/kembreyfarquhar/ChallengeSolutions/blob/master/My%20Solutions/JavaScript/longestString.js)

**Task:**

Write a function that takes an array of strings and return the longest string in the array.

**For Example:**

```javascript
const strings1 = ["short", "really, really long!", "medium"];
console.log(longestString(strings1)); // <--- 'really, really long!'
```

Edge case: If you had an array which had two "longest" strings of equal length, your function should just return the first one.

#

### Reverse String

:eyes: [See Solution](https://github.com/kembreyfarquhar/ChallengeSolutions/blob/master/My%20Solutions/JavaScript/reverseString.js)

**Task:**

Write a function called reverseString that accepts a string and returns a reversed copy of the string.

**For Example:**

| Input         | Output        |
| ------------- | ------------- |
| 'hello world' | 'dlrow olleh' |
| 'asdf'        | 'fdsa'        |
| 'CS rocks!'   | '!skcor SC'   |

#

### Reverse Number

:eyes: [See Solution](https://github.com/kembreyfarquhar/ChallengeSolutions/blob/master/My%20Solutions/JavaScript/reverseNumber.js)

**Task:**

Write a function called reverseNumber that reverses a number.

**For Example:**

| Input | Output |
| ----- | ------ |
| 12345 | 54321  |
| 555   | 555    |

#

### Reverse Case

:eyes: [See Solution](https://github.com/kembreyfarquhar/ChallengeSolutions/blob/master/My%20Solutions/JavaScript/reverseCase.js)

**Task:**

Write a function that takes in a string, reverses the 'casing' of that string, and returns the "reversed-casing" string.

**For Example:**

```javascript
const string = "HELLO world!";
console.log(reverseCase(string)); // <--- hello WORLD!
```

### Valid Parentheses

:eyes: [See Solution](https://github.com/kembreyfarquhar/ChallengeSolutions/blob/master/My%20Solutions/JavaScript/validParentheses.js)

**Task**

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Note that an empty string is also considered valid.

**For Example:**

| Input    | Output |
| -------- | ------ |
| "()"     | true   |
| "()[]{}" | true   |
| "(]"     | false  |
| "([)]"   | false  |
| "{[]}"   | true   |

**Link to Challenge:** https://leetcode.com/problems/valid-parentheses/

### Reverse Integer

:eyes: [See Python Solution](https://github.com/kembreyfarquhar/ChallengeSolutions/blob/master/My%20Solutions/Python/reverseInteger.py)

:eyes: [See JavaScript Solution](https://github.com/kembreyfarquhar/ChallengeSolutions/blob/master/My%20Solutions/JavaScript/reverseInteger.js)

**Task**

Given a 32-bit signed integer, reverse digits of an integer.

**For Example:**

| Input | Output |
| ----- | ------ |
| 123   | 321    |
| -123  | -321   |
| 120   | 21     |

**Note:**
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

**Link to Challenge:** https://leetcode.com/problems/reverse-integer/

### Palindrome Number

:eyes: [See Solution](https://github.com/kembreyfarquhar/ChallengeSolutions/blob/master/My%20Solutions/Python/palindromeNumber.py)

**Task**

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

**For Example:**

| Input | Output |
| ----- | ------ |
| 121   | True   |
| -121  | False  |
| 10    | False  |

> Explanation for 2nd example: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

**Follow up:**

Coud you solve it without converting the integer to a string? (I took up this challenge and solved it without converting the int to a string).

**Link to Challenge:** https://leetcode.com/problems/palindrome-number/

### Longest Common Prefix

:eyes: [See Solution](https://github.com/kembreyfarquhar/ChallengeSolutions/blob/master/My%20Solutions/Python/longestCommonPrefix.py)

**Task**

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

**For Example:**

| Input                        | Output |
| ---------------------------- | ------ |
| ["flower", "flow", "flight"] | "fl"   |
| [ "dog","racecar","car" ]    | ""     |

**Note:**

All given inputs are in lowercase letters a-z.

**Link to Challenge:** https://leetcode.com/problems/longest-common-prefix/

### Merge Two Sorted Lists

:eyes: [See Solution](https://github.com/kembreyfarquhar/ChallengeSolutions/blob/master/My%20Solutions/Python/mergeTwoSortedLists.py)

**Task**

Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

**For Example:**

| Input            | Output           |
| ---------------- | ---------------- |
| 1->2->4, 1->3->4 | 1->1->2->3->4->4 |

**Note:**

These are linked lists, not arrays.

**Link to Challenge:** https://leetcode.com/problems/merge-two-sorted-lists/
