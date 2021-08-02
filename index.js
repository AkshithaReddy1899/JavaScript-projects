const btns = document.querySelectorAll(".btn");
let display = document.getElementById("display");

let count = "0";

btns.forEach(function(btn) {
    btn.addEventListener("click", operation);

    function operation() {
        if (btn.classList.contains("increment")) {
            count++;
        } else if (btn.classList.contains("decrement")) {
            count--;
        } else {
            count = 0;
        }
        display.textContent = count
        if (count > 0) {
            display.style.color = 'green'
        } else if (count < 0) {
            display.style.color = 'red'
        } else {
            display.style.color = 'black'
        }
    }
});