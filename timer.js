// const finalDateTime = new Date('Nov 19, 2021').getTime();
const finalDateTime = new Date('Sep 19, 2021').getTime();
let interval;

const card = document.getElementById("card");

function flipCard() {
    card.classList.toggle("flipCard");
}

function timer() {

    const timerId = 'timer';
    const headerId = 'header'
    let now = new Date().getTime();
    let timeRemaining = finalDateTime - now;

    let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    if (timeRemaining < 0) {
        if (interval) {
            clearInterval(interval);
        }
        document.getElementById(timerId).innerHTML = "Click the Album Cover!";
        document.getElementById(headerId).innerHTML = "IT'S HERE!";
        card.addEventListener("click", flipCard)
        return;
    }
    document.getElementById(timerId).innerHTML = days + ' days ' + hours + ':' + minutes + ':' + seconds;
}

timer();
interval = setInterval(timer, 1000);