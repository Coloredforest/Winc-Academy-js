// Checking if a number is big

// Parameter
const numberCheck = function (number) {
    if (number > 100) {
        return 'true'};
    if (number >= 100) {
        return 'false'};
}

number = 200;
const result = numberCheck(number);
console.log(result);

// Bouncer at a Club

// Parameter
const brendaBouncer = function (agePerson, currentNumber, maxNumber) {
if (agePerson < 18) {
    return 'this is a club for adults'};
    
if (currentNumber < maxNumber) {
    return 'come in'};

if (currentNumber = maxNumber) {
    return 'Its too busy now, come back later'};
}

//Argument

agePerson = 18;
currentNumber = 200;
maxNumber = 100;

// Result
console.log(brendaBouncer(agePerson, currentNumber, maxNumber))

//Calculating the average

// Parameter
const calculateAverage = function (numbers) {
   //const average = numbers.reduce((total, n) => total + n) / numbers.lenght;
    const sum = number1 + number2 + number3 + number4 + number5;
    const average = sum / 5;
    const roundAverage = Math.round(average);
     return roundAverage
}

//Argument
number1 = 1,1
number2 = 10,9
number3 = 11,8
number4 = 8,85
number5 = 9,20

//Result
console.log(calculateAverage(numbers))