const navMenu = document.querySelector('.menu-visible');
const hamburgerButton = document.getElementById('hamburgerbutton');
const bodyColor = document.getElementById('backgroundcolor');
const optionColorSelector = document.querySelectorAll(".option");

const togglehamburgerButton = function () {
    hamburgerButton.addEventListener('click', function () {
        navMenu.classList.toggle('hide-menu');
    })
}

const changeBackground = function () {
    optionColorSelector.forEach(function (item) {
        item.addEventListener('click', function (e) {
            bodyColor.removeAttribute("class");
            bodyColor.classList.add(e.target.classList[1]);
            navMenu.classList.toggle('hide-menu');
        })
    })
}

togglehamburgerButton();
changeBackground();