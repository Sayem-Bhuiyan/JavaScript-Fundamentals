/*
    rest parameters =   (...rest) allows a function work with a variable
                        number of arguments by building them into an array

                        spread  = expands an array into seperate elements
                        rest = bundles seperate elements into an array
*/ 


// Example -- 1
function openFridge(...foods){
    console.log(foods)
}

const food1 = 'pizza';
const food2 = 'hamburger';
const food3 = 'hotdog';
const food4 = 'sushi';
const food5 = 'milk';

// openFridge(food1, food2, food3, food4, food5)

const getFood = (...foods) => foods;
const foods = getFood(food1, food2, food3, food4, food5);
// console.log(foods);



// Example -- 2
const getAvarage = (...numbers) => {
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

const avg = getAvarage(2, 54, 53, 22, 65);
console.log(avg)


// Example --3 

const combineString = (...strings) => strings.join(' ');
const fullName = combineString('Md', 'Sayem', 'Bhuiyan');
console.log(fullName)