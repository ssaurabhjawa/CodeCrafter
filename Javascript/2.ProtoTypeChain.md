The prototype chain is a mechanism that allows objects to inherit properties and methods from other objects. Every object can have exactly one prototype object. That prototype object can also have a prototype object, and so on, creating a chain of inheritied properties and methods. The end of this chain is called the null prototype.

In general, you don’t need to think about the prototype chain when doing everyday JavaScript development. However, it is important to understand how it works because it’s the basis for the class keyword and essential knowledge as you dive deeper into the language.

In the example below, we see how an dog can inherit properties from the animal object, which itself inherits properties from the root Object.prototype.

```
const animal = {
  dna: 'ATCG',
};

const dog = {
  face: '🐺',
}

Object.setPrototypeOf(dog, animal);

Object.getPrototypeOf(dog) === animal; // true

Object.getPrototypeOf(animal) === Object.prototype; // true

Object.getPrototypeOf(Object.prototype) === null; // true
```
