const actieKnop = document.getElementById('mybutton1');
actieKnop.addEventListener('click', function () {
  alert('button clicked');
});

//const actieKnop1 = document.getElementById('mybutton1');
//actieKnop1.addEventListener('click', function () {
//  alert('button clicked');
//});

//const changebackground = function () {
//    const bodyElement = document.body;
//    bodyElement.classList.add('redbackground');
//  };

//const klikEvent = function () {
//    const actieknop = document.getElementById('mybutton2');
//    actieknop.addEventListener('click', function () {
//      changebackground();
//   });
//  };

//  klikEvent();

const kleurSwitch = function() {
    const bodyElement = document.body;
    bodyElement.classList.toggle('redbackground');
};

const klikEvent = function() {
    const actieknop = document.getElementById('mybutton2');
    actieknop.addEventListener('click', function() {
        kleurSwitch();
    });
};

  klikEvent();