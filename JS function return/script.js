const isBigNumber = function (number) {
    if(number > 100) {
        return true;
    } else {
        return false;
    }
}

const bigNumber = isBigNumber(120);
console.log(bigNumber);

//deel 2 - bouncer bot
const age = [];
const maxPeople = [];

const enterClub = function (age, maxPeople) {
    if(age >= 18 && maxPeople < 100){
        return "come in";
    } else if(age >= 18 && maxPeople >= 100){
        return "it's too busy now, come back later";
    } else {
        return "this is a club for adults";
    }
}

console.log(enterClub(20, 120));
console.log(enterClub(20, 80));
console.log(enterClub(16, 80));
console.log(enterClub(16, 120));

//deel 3 - calculating average
const numbersArray1 = [5, 10, 7, 8, 8];
const numbersArray2 = [4, 11, 13, 4, 2];

const calculateAverage = function (array) {
    return Math.round(array.reduce((a, b) => (a + b)) / array.length);
}

console.log(calculateAverage(numbersArray1));
console.log(calculateAverage(numbersArray2));