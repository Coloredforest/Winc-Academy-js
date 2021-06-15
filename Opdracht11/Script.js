// Aantekeningen

/*var age = 5;

while (age < 10) {

    console.log("Your age is less then 10")
    Age++;
}

document.write("you are now over 10")

//----------------------------------------------------------------------------------



for (age = 5; age < 10; age++) { 
console.log("Your age is less then 10");

}

*/

// Opdracht

for (i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is oneven");
    }
  }

  //----------------------------------------------------------------------------------

 const cijfer = 9

  for (i = 0; i <= 10; i++) {
    const uitkomst = cijfer * i;
    console.log(cijfer + " * " + i + " = " + uitkomst);

  }

//----------------------------------------------------------------------------------

  function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'E';
    }
}

for (i = 60; i <= 100; i++) {
    console.log("Voor " + i + " punten, krijg je een " + assignGrade(i));
}
