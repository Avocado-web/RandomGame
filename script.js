"use strict";

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const gameRandom = function() {
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    }
    const randomNumber = getRandomIntInclusive(1, 100);
    const repeat = function() {
        let userNumber = prompt("Введите число!");
        console.log(randomNumber);
        if (isNumber(userNumber)) {
            if (userNumber > randomNumber) {
                alert("Загаданное число меньше");
                return repeat();
            } else if (userNumber < randomNumber) {
                alert("Загаданное число больше");
                return repeat();
            } else {
                alert("Поздравляю, Вы угадали!!!");
                return repeat();
            }
        } else if (userNumber === null) {
            let notificationEndGame = document.querySelector(".wrapper").classList.toggle("hidden");
            console.log("Конец");
        } else if (!isNumber(userNumber)) {
            alert("Введи число!");
            return repeat();
        }
    };
    return repeat();
};
gameRandom();