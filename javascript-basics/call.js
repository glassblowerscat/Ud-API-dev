let obj = {
  num: 2,
};

let addToThis = function (a, b, c) {
  // 'this' has no context here
  return this.num + a + b + c;
};

// call binds the function to the first object passed in. Parameters are passed in subsequent values.
console.log(addToThis.call(obj, 1, 2, 3));

let person1 = {
  firstName: 'Ryan',
  lastName: 'Elainska',
};

let person2 = {
  firstName: 'Joe',
  lastName: 'Gough',
};

function hello(greeting) {
  console.log(`${greeting}, ${this.firstName} ${this.lastName}.`);
}

hello.call(person1, "Hello");
hello.call(person2, "What's up");