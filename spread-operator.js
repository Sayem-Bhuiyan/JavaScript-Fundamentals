// Speread operator =   ... allows an iterable such as an
//                      array or string to be expanded
//                      into seperate elements
//                      (unpacks the element)



let number = [1, 2, 3, 4, 5];
let maxNumber = Math.max(...number);
let minNumber = Math.min(...number);

// console.log(maxNumber, minNumber);

let userName = 'Sayem Bhuiyan';
let letters = [...userName].join('-');
// console.log(letters)


let fruits = ['apple', 'orange', 'banana'];
let vegetables = ['carrot', 'tomato', 'potato'];

let foods = [...fruits, ...vegetables, 'eggs', 'milk']

console.log(foods);