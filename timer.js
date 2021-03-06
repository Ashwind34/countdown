const finalDateTime = new Date('19 November 2021 00:00 UTC').getTime();

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

    hours = hours >= 10 ? hours : "0" + hours;
    minutes = minutes >= 10 ? minutes : "0" + minutes;
    seconds = seconds >= 10 ? seconds : "0" + seconds;

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