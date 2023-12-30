/*
    .map()  = accepts a callback and applies that function
              to each element of an array, then return a new array
*/ 

const numbers = [1, 2, 3, 4, 5]

const square = numbers.map(num => {
    return Math.pow(num, 2);
})
// console.log(square)

// Example -- 2
const students = ['Sayem', 'Akash', 'Shajib', 'Tipu'];

const studentsUppercase = students.map(name => {
    return name.toUpperCase();
})

// console.log(studentsUppercase);

// Example --- 3
const dates = ['2024-3-14','2024-4-5', '2024-11-10', '2024-11-21']
// const formatedDates = dates.map(formatDates);
// console.log(formatedDates);

const formatedDates = dates.map(date => {
    const part = date.split('-');
    return `${part[2]}/${part[1]}/${part[0]}`;
})
console.log(formatedDates);

function formatDates(element){
    const parts = element.split('-');
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}
