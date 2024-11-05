# Lektion-11-05

## Objects

Objects can be described as its counterpart in real life. Like a car.

It has properties like model, color, engine, wheels.

It also has methods (things you can do with the car), like starting, breaking, blinkers and such things.

Array is a type of object properties such as `.length` `.push()` `.pop()`
`.icnludes()` `.map()`

String is a type of object with properties like `.length`

### Create Object

We need a variable and declare it using { }. When we assign something we we don't assign a value directly. Later we can fill it with data.

```js
// Curly brackets to create an object

const someObject = {};
```

This is an empty object. Best practice is to use `const` when declaring an object. Object are, like arrays, passed by reference. Which means the variable is just a reference _( pointer )_ to the place on the hard-drive. Where the actual data is stored.

### Properties

Let's create a car instead and fill it with data

```js
const car = {
  make: "Volvo",
  model: "V70",
  year: 2016,
  manualTransmission: true,
};
```

This car represents an object, and it has four properties. Each property represents some sort of info regarding the car. As you can see, the properties can have different data types and the structure comes in key-value-pairs. Keys to the left, values to the right. Each property is seperated with a comma.

### Custom Methods

An object can also have methods that represents some sort of action that the object can do. Methods are in reality just functions. But as soon as a function is connected to a specific object it becomes a method.

```js
const car = {
    make: "Volvo",
    model: "V70",
    year: 2016,
    manualTransmission: true
    start: function() {
        console.log("The car has started");
    },
    changeGear: () => {
        console.log("Gear has been changed");
    },
};
```

### "THIS" Scope

`this` is a keyword that refers to an object in javaScript but what it is depends on the current context in which `this` is used.

Different contexts:

- Alone, `this` refers to the global window object.

- In "use strict" - mode, `this` would be undefined.

- **In an object, `this` refers to the object itself**

- In a function `this` refers to the global object, unless it is created in another context.

- ...some other contexts as well.

```js
const person = {
    firstName: "Oliver",
    lastName: "Faxe",
    fullName: function() {
        const fullName = this.firstName + " " + this.lastName;
        console.log(fullName);
    },
};
```

In this example, `this` is used to regfer to the object itself, its own properties. If we don't use `this` inside the functions scope. It won't work.

## Manipulating Objects

Objects are not locked when we create them, they are open for editing throughout our program.

### Accessing properties and methods

Accessing properties in an object can be done in three ways.

* The first one is to use a period, it's called `dot-notation`.

```js
const car = {
    make: "Volvo",
    model: "V70",
    year: 2016,
    manualTransmission: true
    start: function() {
        console.log("The car has started");
    },
};

// Accessing the model property with dot-notation
console.log(car.model) // => V70

// We can also store the value in a variable.
const modelOfCar= car.model;
console.log(modelOfCar); // => V70
```

To access a function we can also use dot-notation but we also need to invoke the method.

```js
car.start(); // Will log "The car has started"
```

* The second way is to use an array-like syntax. using `square brackets`

```js
console.log(car["make"]); // Volvo

// Again we can store the value in a variable.
const = carMake = car["make"];
console.log(carMake); // Volvo
```

It's important to use a `string value` inside the `square brackets `otherwise it won't work. The string must be also equal to an actual property of the given object.

* The third way is to use something that is called `object destructuring`

```js
const car = {
    make: "Volvo",
    model: "V70",
    year: 2016,
    manualTransmission: true
    start: function() {
        console.log("The car has started");
    },
};

const { make, model } = car;

console.log(make); // Volvo
console.log(model); // V70
```

### Updating properties

Is done in the same, use dot-notation or square brackets, remember to also use the assignment operator `=`

```js
const car = {
    make: "Volvo",
    model: "V70",
    year: 2016,
    manualTransmission: true
    start: function() {
        console.log("The car has started");
    },
};

car.make = "Saab";
car["year"] = 2020;

console.log(car.make); // Uppdaterat Saab
console.log(car.year); // Uppdaterat 2020
```

If you try and update something that doesnt exists. You will create a new property with that name and value.

### Removing properties and methods.

Removing stuff from an object is easy. Keyword `delete`. This is considered bad practice though.

```js
const person = {
    firstName: "Oliver",
    lastName: "Faxe",
};

delete person.firstName;

console.log(person); // firstName is removed.
```

### Looping through and Object

Use case: When you want to iterare over the properties of an object. You use a `for..in-loop`. Almost identical to a for..of-loop but using a different keyword in the middle.

```js
for (const key in object) {
    // Code to execute in each iteration.
}
```
Example with the car:

```js
const car = {
    make: "Volvo",
    model: "V70",
    year: 2016,
    manualTransmission: true,
    start: function() {
        console.log("The car has started");
    },
};

for (const key in car) {
    console.log(key); // Will log the key in car
}
```

This will just log out the different keys of the object. If we want the value of each key we do like this: 

```js
for (const key in car) {
    const value = car[key];
    console.log(`${key}: ${value}`);
}
```

Dot-notation doesn't work in this case. because `key` here is a dynamic value that changes every iteration. When we use dot-notation it looks for a property in a literal sense. Which means the property `key` must exist on the object. Which it doesnt. 