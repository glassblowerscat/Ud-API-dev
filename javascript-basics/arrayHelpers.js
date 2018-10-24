// Array Helper Methods

let array = [32, 49, 54, 58];

console.log('FOR LOOP======');
for (var x = 0; x < array.length; x++) {
  console.log(array[x]);
}

console.log('FOR EACH Verbose======');
array.forEach(function (value) {
  console.log(value);
});

console.log('FOR EACH Fat Arrow======');
array.forEach(value => console.log(value));

console.log('GRADES========');
let grades = [98, 87, 82, 74, 89, 87];

let sum = 0;

grades.forEach(grade => sum += grade);

let average = sum / grades.length;

console.log(`Our average is ${average.toFixed(2)}`);

// MAP Helper
// iterate through an array and perform some operation on each element.
// One of the most commonly used helpers.

let array2 = [1, 2, 3, 4, 5];
let addOne = [];

for (let x = 0; x < array2.length; x++) {
  addOne.push(array2[x] + 1);
};

console.log(addOne);

// With MAP Helper

// ES5 Function
let addOneMap = array2.map(function (value) {
  return value + 1;
});
console.log(addOneMap);

// ES6 Function
addOneMap = array2.map(value => value + 1);
console.log(addOneMap);

let vehicles = [
  { id: 1, make: 'Dodge', model: 'Ram 1500', year: '2015', is4WD: true },
  { id: 2, make: 'Toyota', model: 'Corolla', year: '2005', is4WD: false },
  { id: 3, make: 'Ford', model: 'Focus', year: '2006', is4WD: false },
];

let truckDriver = {
  vehicleId: 1,
  name: 'Jack',
};

let models = vehicles.map(vehicle => vehicle.model);
console.log(models);

// FILTER Helper

console.log('FILTER======');
let vehiclesByMake = vehicles.filter(vehicle => vehicle.make === 'Dodge');
console.log(vehiclesByMake);
let vehiclesBy4WD = vehicles.filter(vehicle => vehicle.is4WD === false);
console.log(vehiclesBy4WD);

// FIND Helper

console.log('FIND======');
let vehicle = vehicles.find(vehicle => vehicle.is4WD === false);
console.log(vehicle);

console.log('FIND Driver===');
/* function driverForVehicle(vehicles, driver) {
  return vehicles.find(function (vehicle) {
    return vehicle.id === driver.vehicleId;
  });
} */

function driverForVehicle(vehicles, driver) {
  return vehicles.find(vehicle => vehicle.id === driver.vehicleId);
};

let driver = driverForVehicle(vehicles, truckDriver);
console.log(driver);

// SOME and EVERY Helpers

let areAll4WD = vehicles.every(function (vehicle) {
  return vehicle.is4WD === true;
})

// let areAll4WD = vehicles.every(vehicle => vehicle.is4WD === true);
console.log(areAll4WD);

/* let is4WD = vehicles.some(function (vehicle) {
  return vehicle.is4WD === true;
}); */

let is4WD = vehicles.some(vehicle => vehicle.is4WD === true);
console.log(is4WD);

// REDUCE Helper

let grades2 = [98, 87, 82, 74, 89, 87];

/*
let sum2 = 0;

for (let i = 0; i < grades2.length; i++) {
  sum2 += grades2[i];
};

console.log(`sum = ${sum2}`);
console.log(`Our average is ${(sum2 / grades2.length).toFixed(1)}`); */

/* let total = grades2.reduce(function (sum2, grade2) {
  return sum2 + grade2;
}, 0); */

let total = grades2.reduce((sum2, grade2) => sum2 + grade2);

console.log(`total = ${total}`);
console.log(`Our average is ${(total / grades2.length).toFixed(1)}`);