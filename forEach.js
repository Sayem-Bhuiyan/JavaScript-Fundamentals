/**
 *  forEach()  = method used to iterate over the elements
 *               of an array and apply a specified function (callback)
 *               to each element
 * 
 *               array.forEach(callback)
 **/ 

let numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
    // console.log(num)
});

numbers.forEach((num) => {
    const double = num * 2;
    // console.log(double);
})

numbers.forEach((num) => {
    const square = Math.pow(num, 2);
    // console.log(square);
})

const fruits = ['banana', 'apple', 'pinaple', 'coconut']
fruits.forEach(fruit => {
    console.log(fruit.toUpperCase())
})