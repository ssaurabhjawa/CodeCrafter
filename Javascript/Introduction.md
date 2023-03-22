# Javascript
## Variables

### Let 
There are several different ways to define variables, the most common of which today is let. We start by giving it a name, which will normally be in camelcase, then assign a value to it.<br />
```
let luckyNum = 23;
```
 It's a dynamically typed language, which means no data type annotations are necessary. In this case, we've assigned a number, which is one of the seven primitive data types built into the language. However, we don't need to assign the variable a value right now because it can be reassigned later. Without an assignment, it automatically uses the primitive value of undefined as its default value. However, we can explicitly represent an empty value using null, and later on, we could reassign that same variable to a string. It's an entirely different data type, but that's perfectly okay.<br />
## Seven Primitive Data Types
* String
* number
* bigint
* boolean
* undefined
* symbol
* null

Now, any value that's not a primitive will inherit from the object class, but more on that later. Right now, we need to talk about the semicolon. Technically, semicolons are optional because if you leave them out, the JavaScript parser will add them automatically. In real life, JavaScript developers will often fight to the death over whether or not to use semicolons.<br />
```
luckyNum = new Object();

```
But let is not the only way to define a variable. Another common option is const, which is used for variables that cannot be reassigned later. But the original way to declare a variable is VAR. I would recommend ignoring its existence altogether, although you will find it out in the wild.<br />
```
const name 

```
## Lexical Environment
The reason we have so many different ways to define variables has to do with the lexical environment, which determines where variables work and where they don't. There's a global scope, which is where we are right now, which means this variable will be available everywhere. However, if we define a variable inside a function, it then becomes local<br />

In JavaScript, the concept of scope determines where variables can be accessed and used. There are two main types of scope: global and local. The global scope is where we are right now, and any variable defined in the global scope is accessible everywhere in the program.
<br />
However, if we define a variable inside a function, it becomes local to that function and cannot be accessed outside of it. If we have a statement like an if condition, variables can be scoped inside the braces or block, unless we use the VAR keyword for that variable. If VAR is used, the variable is hoisted up into the local scope for that function, which can lead to weirdness in the program.
<br />
## Functions
Functions are one of the main building blocks in JavaScript. They work by taking an input or argument, then optionally returning a value that can be used somewhere else. Functions are just objects, which means they can also be used as expressions, allowing them to be used as variables or to construct higher-order functions where a function is used as an argument or a return value.

Functions can also be nested to create a closure that encapsulates data and logic from the rest of the program. Normally, when you call a function that has a variable with a primitive value, it's stored on the call stack, which is the browser's short-term memory. However, when you create a closure, the inner function can still access variables in the outer function even after the initial function call. That's because JavaScript automatically stores the data in the outer function in the Heap memory, which persists between function calls.

![Alt text](https://res.cloudinary.com/practicaldev/image/fetch/s--Y1v6aJBu--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/ek7ji4zrimozpp2yzk0a.png!)

As a developer, you'll rarely have to think about Heap memory, but you're more likely to run into the issue of variable scoping, which can cause errors in your code. So, it's important to understand the different types of scope and how to use them properly in your code.
```
let a = 'global'; // Global Scope

function fun(){
    let a = 'function'; // Local Scope

    if (true) {
        let a = 'block';
    }
}
```
Let's start with data types. JavaScript has several primitive data types, including numbers, strings, booleans, null, undefined, and symbols. It also has a non-primitive data type called objects. Variables in JavaScript are dynamically typed, which means you don't have to declare the type of a variable before using it. Instead, the type of a variable is inferred based on the value assigned to it.<br />
```

```

When it comes to scoping, JavaScript has global and local scopes. Variables declared outside of a function have global scope, which means they're available everywhere in your code. However, if you define a variable inside a function, it becomes local to that function and cannot be used outside of it. Variables can also be scoped inside if conditions or blocks unless you use the var keyword, which hoists the variable up into the local scope for that function.<br />
```


```
Functions are one of the main building blocks in JavaScript. They work by taking an input or argument, then optionally return a value that can be used somewhere else. Functions can be defined using the function keyword or the arrow syntax for function expressions. They can also be nested to create a closure that encapsulates data and logic from the rest of the program.
```


```
JavaScript also has objects, which can contain a collection of key-value pairs or properties and values. Objects can inherit properties from each other thanks to a mechanism called the prototype chain. JavaScript supports object-oriented programming with the class keyword, which is just syntactic sugar for prototypal inheritance and objects.<br />
```


```
JavaScript has several built-in data structures, including arrays, sets, and maps. Arrays are used to hold a dynamic collection of indexed items, while sets hold a collection of unique items. Maps are like objects but can be more easily looped over and contain a key-value pair.<br />
```


```
Finally, JavaScript has an interesting feature called the event loop, which allows you to write asynchronous code that runs in a separate thread pool while the rest of the application continues to execute. This is important because modern websites often have multiple things going on at the same time, but they only have access to a single thread for computing called the main thread. Asynchronous code is executed in the background, and its results are later returned to the main thread.<br />