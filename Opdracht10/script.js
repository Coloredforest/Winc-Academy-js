/* AANTEKENINGEN

// Calling functions

const scream = function () {
    console.log("Aaaaaaa!");
  };
  
  // Calling scream outside of a function
  scream();
  
  // Here we call scream inside of a function
  const makeNoise = function () {
    scream();
  };
  
  makeNoise();

  // Return values

  const add = function(numberA, numberB) {
    return numberA + numberB;
};

// The add function returns to this line, which is outside of a function.
const eight = add(3, 5);
console.log(eight);

const doCalculation = function() {
    // The add function returns to this line, which is inside of a function.
    const six = add(2, 4);
    console.log(six);
};

doCalculation();

//Debugging
const makePositive = function(number) {
    console.log("Entering makePositive..");
    if (number < 0) {
        return Math.abs(number);
    }
    return number;
};

const makeBigger = function(number) {
    console.log("Entering makeBigger..");
    if (number < 10) {
        return 10 + number;
    }
    return number;
};

const square = function(number) {
    console.log("Entering square..");
    return number * number;
};

const doComplexCalculation = function(number) {
    console.log("Entering doComplexCalculation..");
    const positiveNumber = makePositive(number);
    const bigNumber = makeBigger(positiveNumber);
    const squaredNumber = square(bigNumber);
    return squaredNumber;
};

console.log(doComplexCalculation(-1));

*/

// OPDRACHT

// Parameter
const ageChecker = function (number) {
    console.log('input: ' + number)
    if (number > 17) {
        return "true";
    } else           {
        return false;
    }
}


const adultChecker = function (number) {
    console.log(Adult)

    if (adult = "true") {
        return console.log ("Hello there");
    } else {
        return console.log ("Hey Kiddo");
    }
}

ageChecker(19)