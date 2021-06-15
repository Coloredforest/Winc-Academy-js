/*
// Function declaration

 function sayHello1 () {
     console.log("Hello 1");
 }
 sayHello1();

// Function expression
const sayHello2 = function () {
    console.log("hello 2");
}
sayHello2();

// Arrow function (also a function expression)
const sayHello3 = () => {
    console.log ("Hello 3");
}
sayHello3();

*/

// Function declaration
function calCulate1 (number1, number2) {
    const squared1 = number1 * number1;
    const squared2 = number2 * number2;
    const sum1  = squared1 + squared2;
    const result1 = sum1 * sum1;
        return console.log(result1);
}

calCulate1(4, 20);

// Function expression
const calCulate2 = function (number3, number4) {
    const squared3 = number3 * number3;
    const squared4 = number4 * number4;
    const sum2  = squared3 + squared4;
    const result2 = sum2 * sum2;
        return console.log(result2);
}

calCulate2(4, 20);


// Arrow function (also a function expression)
const calCulate3 = (number5, number6) => {
    const squared5 = number5 * number5;
    const squared6 = number6 * number6;
    const sum3  = squared5 + squared6;
    const result3 = sum3 * sum3;
        return console.log(result3);
}

calCulate3(4, 20);


