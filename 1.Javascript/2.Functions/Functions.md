## Types of JavaScript Built-in Functions

In JavaScript, there are several types of built-in functions that developers can use. Here are some of the most commonly used types of built-in functions:

1.  **String functions**: These functions are used to manipulate strings, such as converting them to uppercase or lowercase, trimming whitespace, and searching for substrings. Some examples include:

-   `toUpperCase()`: Converts a string to uppercase.
-   `toLowerCase()`: Converts a string to lowercase.
-   `trim()`: Removes whitespace from the beginning and end of a string.
-   `indexOf()`: Returns the index of the first occurrence of a substring in a string.

2.  **Array functions**: These functions are used to manipulate arrays, such as adding or removing elements, sorting, and filtering. Some examples include:

-   `push()`: Adds one or more elements to the end of an array.
-   `pop()`: Removes the last element from an array and returns it.
-   `sort()`: Sorts the elements of an array in place.
-   `filter()`: Creates a new array with all elements that pass a test function.

3.  **Math functions**: These functions are used for mathematical operations, such as rounding, exponentiation, and trigonometry. Some examples include:

-   `Math.round()`: Rounds a number to the nearest integer.
-   `Math.pow()`: Returns the value of a number raised to a specified power.
-   `Math.sin()`: Returns the sine of a number.

4.  **Date functions**: These functions are used for working with dates and times. Some examples include:

-   `Date.now()`: Returns the current date and time as a timestamp.
-   `getDate()`: Returns the day of the month for a given date object.
-   `getMonth()`: Returns the month (0-11) for a given date object.

These are just some examples of the types of built-in functions in JavaScript. There are many other types of functions, such as object functions, regular expression functions, and more, that can be used to perform a wide range of tasks in JavaScript.


Demonstrate navigate.vibrate()
window.scrollTo(1,1000)

# Custom Functions
## Calculate Bill Application


calBill.js
```js
// Function Defination
function calculateBill(){
    // this is the function block/body
    const total = 100 * 1.18;
    console.log(total);
    // How do I store the result of function in a variable 
    return total;
}
// function call or **Run**
calculateBill()
console.log(total)
const myTotal = calculateBill();
console.log(`Your Total is $${myTotal}`)
// 'Total' variable is a temporary variable inside the function 'calculateBill'. To capture the value of 'Total' Variable you have to stick in a variable
`$${}` - interpolation String
```

# Parameters & Arguments
It is not good to reach outside the scope of function to get data
Parameters - Placeholder
Arguments - 
![]
