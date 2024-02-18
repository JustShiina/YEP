let counter = 0;

function increaseCounter() {
    let counter = localStorage.getItem('counter');
    if (counter === null) {
        counter = 0;
    }
    counter++;
    localStorage.setItem('counter', counter);
    document.getElementById('counter-display').innerText = counter;
}

function decreaseCounter() {
    let counter = localStorage.getItem('counter');
    if (counter === null) {
        counter = 0;
    }
    counter--;
    localStorage.setItem('counter', counter);
    document.getElementById('counter-display').innerText = counter;
}
window.onload = function () {
    let counter = localStorage.getItem('counter');
    if (counter === null) {
        counter = 0;
    }
    document.getElementById('counter-display').innerText = counter;
}