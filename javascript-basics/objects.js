var truck = {
    // properties
    make: 'Dodge',
    wheels: 4,
};

// Bracket notation
console.log(`I have a ${truck['make']} that has ${truck['wheels']} wheels.`)

// Dot notation
console.log(`I have a ${truck.make} that has ${truck.wheels} wheels.`);

// Object literal
var employee = {
  // properties
  firstName: 'Joe',
  lastName: 'Blow',
  // method
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  }
};

// Reference a Property
console.log(`Our IT Director is ${employee.firstName}.`);

// Call a method
console.log(`His full name is ${employee.fullName()}.`);

// Object constructor function
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.getFullDescription = function () {
    return `${this.year} ${this.make} ${this.model}`;
  };
}

// Create new instance with the new keyword
let myTruck = new Vehicle('Ford', 'F-150', '2012');
let myWifesCar = new Vehicle('Dodge', 'Dart', '2009');
let myDaughtersCar = new Vehicle('Saturn', 'Ion', '2006');

console.log(myTruck.year, myTruck.make, myTruck.model);
console.log(myWifesCar.getFullDescription());

/*
function createVehicle(make, model, year) {
  return {
    make: make,
    model: model,
    year: year,
    getFullDescription: function() {
      return `${year} ${make} ${model}`;
    }
  };
}
 */

// ES6 Enhanced Object Literal Syntax
function createVehicle(make, model, year) {
  return {
    make,
    model,
    year,
    getFullDescription() {
      return `${year} ${make} ${model}`;
    }
  };
}

let myTruck2 = createVehicle('Chevrolet', 'Tahoe', '2006');
let myWifesCar2 = createVehicle('Toyota', 'Corolla', '2009');
let myDaughtersCar2 = createVehicle('Nissan', 'Rogue', '2016');

console.log(myTruck2.getFullDescription());
console.log(myWifesCar2.getFullDescription());
console.log(myDaughtersCar2.getFullDescription());
