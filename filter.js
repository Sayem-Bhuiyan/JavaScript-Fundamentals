// .filter() = creates a new array by filtering
//             out elements

// Example -- 1
let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(num => num % 2 === 0);
console.log('Even Numbers are', evenNums);

let oddNums = numbers.filter(num => num % 2 !== 0);
console.log('Odd Numbers are', oddNums)


// Exaple --- 2
const ages = [33, 22, 11, 23,15, 18];
const adulst = ages.filter(age => age >= 18);
console.log('Adults are', adulst);