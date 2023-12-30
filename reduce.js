// .reduce() = reduce the elements of an array
//             to a single value

const prices = [4, 53, 12, 32];
const totalPrice = prices.reduce((acc, price) => acc + price);
console.log(`$${totalPrice.toFixed(2)}`)


const grades = [34, 54, 65, 78, 52, 89];
const maxGrade = grades.reduce((accumulator, element) => Math.max(accumulator, element));
console.log(maxGrade);

const minGrade = grades.reduce((accumulator, element) => Math.min(accumulator, element));
console.log(minGrade);