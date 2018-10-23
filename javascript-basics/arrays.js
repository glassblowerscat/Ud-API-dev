let grades = [92, 98, 84, 87, 93,];

console.log(`My first grade was ${grades[0]}.`);

let myStuff = ['baseball', 'football', 32, true, 'Magic Mouse'];

console.log(myStuff.length);

// Array Methods
// POP

let poppedValue = myStuff.pop();

console.log(poppedValue);
console.log(myStuff);

// PUSH

myStuff.push(poppedValue);
console.log(myStuff);

console.log(grades);
grades.push(79, 92, 84);
console.log(grades);

// SHIFT

let shiftedValue = myStuff.shift();
console.log(shiftedValue);
console.log(myStuff);

// UNSHIFT

myStuff.unshift(shiftedValue);
console.log(myStuff);

// CONCAT

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let concatArray = array1.concat(array2);

console.log(concatArray);

let array3 = [7, 8, 9];

let concatArray2 = array1.concat(array2, array3);
console.log(concatArray2);

// REVERSE

let reversedArray = concatArray2.reverse();
console.log(reversedArray);

// SORT

let statesArray = ['Missouri', 'Arkansas', 'Arizona', 'Mississippi', 'Alabama', 'Indiana', 'California'];

let sortedStatesArray = statesArray.sort();
console.log(sortedStatesArray);

let numericArray = [233, 345, 4, 21, 192, 5, 3, 56];

let sortedNumericArray = numericArray.sort((a, b) => a - b);
console.log(sortedNumericArray);

// SLICE

let slicedStates = sortedStatesArray.slice(2, 6);
console.log(slicedStates);

slicedStates = sortedStatesArray.slice(2);
console.log(slicedStates);

slicedStates = sortedStatesArray.slice(2, sortedStatesArray.length - 2);
console.log(slicedStates);