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

![functionsAnatomy](https://github.com/ssaurabhjawa/CodeCrafter/blob/main/Assets/images/functions.png?raw=true)

# Parameters & Arguments

```js
function doctorize(name){
    return `Dr. ${name}`;
}

function yell(name = 'Silly Goose'){
    return `Hey ${name.toUpperCase()}`;
}

yell(doctorize('wes'))
```
The name that gets passed in doctorize is only available within doctorize

# Different Ways to Declare Functions
Function are First class citizen

```js
function doctorize(firstName){
    return `Dr. ${firstName}`;
}

// Anon Expression
function (firstName) {
        return `Dr. ${firstName}`;
}

console.log(doctorize('Wes'));

// Function Expression - inside a variable
const doctorize = function (firstName) {
        return `Dr. ${firstName}`;
}

// Hoisting - function keyword gets hoisted to the top of file
function doctorize(firstName){
    return `Dr. ${firstName}`;
}

// Arrow Functions - Do not have their own scope in reffered to 'This' Keyword
function inchToCM(inches) {
    const cm = inches * 2.54;
    return cm;
}

function inchToCM(inches){
    return inches * 2.54;
}

const inchToCM = function(inches){
    return inches * 2.54;
} 

// explicit return - with function block
const inchToCM = (inches) => {
    return inches * 2.54
}

// implicit return
const inchToCM = (inches) => inches * 2.54;

// if only one arguments - bhurr
const inchToCM = inches => inches * 2.54;

function makeAPerson(first, last){
    const person = {
        name: `${first} ${last}`,
        age: 0
    }
    return person;
}

const makeAPerson = (first, last) => {
    const person = {
        name: `${first} ${last}`,
        age: 0
    }
    return person;
}

const makeAPerson = (first, last) => {
    return {
        name: `${first} ${last}`,
        age: 0
    }
}

// how to implicitly return a object? Object can be put into one line
const makeAPerson = (first, last) => { name: `${first} ${last}`,age: 0 }
// curly bracket is thought to be block of function here, curly brackets are used 
// for creation of a object or block of code
// 
const makeAPerson = (first, last) => ({ name: `${first} ${last}`,age: 0 });
// not fun, hard to read

// IIFE
// Immediately Invoked Function Expression

(function(age){
    console.log('Running the Anon function')
    return `You are Cool and age${age}`;
})();

// Methods!!!
// A methods is a function that lives inside an object
// console.log, console is an object, log is function

const person = {
    name: 'Sachin',
    sayHi(): function(){
        console.log('Hey Wes');
        return 'Hey Wes';
    },
    yellHi(){
        console.log('shortHandMethod')
    },
    wisperHi: ()=>{
        console.log('Arrow Function, arrow function do not have the scope of "this"')
    },
    // sayHi() is a method, function that lives inside object 'person'
    // sayHi() is a variable that infer functions
    sayHi(): function(){
        console.log(this.name);
        return 'Hey Wes';
    },
}


// CallBack Functions - Something that happens after something is done
// when someone click something, run this, or when some time is passed run this
const button = document.querySelector('.clickMe');
button.addEventListener('click',wes.yellHi)
// callback is yellHi function

button.addEventListener('click',function (firstName) {
        return `Dr. ${firstName}`;
})

//timer callback
setTimeOut(wes.yellHi,1000)
setTimeOut(function (firstName) {
        return `Dr. ${firstName}`},1000)
```

# Debugging Tool
```js
const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  console.group(`Starting ${person.name}`);
  console.log(person.name);
  console.log(person.country)
  console.log(person.cool)
  console.groupEnd(`Stoping ${person.name}`);
});

people.forEach((person, index) => {
  console.table(person.name);
  console.count(people)
});

// Console Methods

// Callstack



// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doctorize(name) {
  console.count(`running Doctorize for ${name}`);
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist(); //cause an error
  return `Hello ${name}`;
}
// ***Run go() in console to get error***
function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}


const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
```
# Grabbing an element

Select an element, it turn blue
switch to console and type $0
click on another element
console type $1

In console - $$ - select based on selector

## BreakPoint
```js
people.forEach((person, index)=>{
    debugger;
    console.log(person.name);
});
// stop running
```

#




