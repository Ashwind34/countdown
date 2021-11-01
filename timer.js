const finalDateTime = new Date("Nov 19, 2021").getTime();

function timer() {

    const id = 'timer';
    let now = new Date().getTime();
    let timeRemaining = finalDateTime - now;

    let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById(id).innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if (timeRemaining < 0) {
        clearInterval(interval);
        document.getElementById(id).innerHTML = "EXPIRED";
    }
}

timer();
let x = setInterval(timer, 1000);