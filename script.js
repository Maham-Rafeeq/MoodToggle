let body = document.getElementById("body");
let moon = document.getElementById("moon");
let mode = true;

function clickme() {
    if (mode === true) {
        // dark mode
        body.style.backgroundColor = "black";
        body.style.color = "white";
        moon.classList.replace('ri-moon-fill', 'ri-sun-fill');
        mode = false;
    } else {
        // light mode
        body.style.backgroundColor = "white";
        body.style.color = "black";
        moon.classList.replace('ri-sun-fill', 'ri-moon-fill');
        mode = true;
    }
}

