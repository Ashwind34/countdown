const finalDateTime = new Date('Nov 19, 2021').getTime();
let interval;

function timer() {

    const id = 'timer';
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
        document.getElementById(id).innerHTML = '<a href="https://open.spotify.com/artist/4dpARuHxo51G3z768sgnrY">GO LISTEN TO IT!!</a>';
        return;
    }

    document.getElementById(id).innerHTML = days + 'd ' + hours + 'h '
    + minutes + 'm ' + seconds + 's ';
}

timer();
interval = setInterval(timer, 1000);