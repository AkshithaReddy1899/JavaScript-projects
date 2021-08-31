let form = document.getElementById("myForm");

function reload() {
    alert("Are you sure you want to try another date?")

    location.href = location.href;
}

form.addEventListener("click", (event) => {
    event.preventDefault();
});

const submit = document.getElementById("submit");
submit.addEventListener("click", operation);

let error = document.getElementById("error");
let ageOnEarth;
let ageOnMercury;
let ageOnVenus;
let ageOnMars;
let ageOnJupiter;
let ageOnSaturn;
let ageOnUranus;
let ageOnNeptune;
let result = document.getElementById("result");

function operation() {
    let planets = document.querySelector(".planets");
    let details = document.querySelector(".details");
    let year = document.getElementById("year").value;
    let month = document.getElementById("month").value;
    let birthDate = document.getElementById("date").value;
    let age = year + "-" + month + "-" + birthDate;
    if (age === " ") {
        error.textContent = "Please enter your date of birth";
    } else if (year === " " || month === " " || birthDate === " ") {
        error.textContent = "Please re-enter your correct date of birth.";
    } else {
        let date = new Date(age);
        let currentDate = Date.now();
        const difference = currentDate - date;
        let ageDifference = new Date(difference);
        ageOnEarth = Math.abs(ageDifference.getUTCFullYear() - 1970);
        document.getElementById("heading").textContent = "Select any planet below";
        details.style.display = "none";
        planets.style.display = "grid";
    }
}

let btnPlanet = document.querySelectorAll(".btn");


btnPlanet.forEach((planet) => {
    planet.addEventListener("click", ageCalculator);


    function ageCalculator() {

        error.textContent = "";
        document.getElementById("refresh").style.display = "inline";

        if (planet.classList.contains('mercury')) {
            ageOnMercury = ((ageOnEarth * 365) / 87.969).toFixed(2);
            result.textContent = "Your age on Mercury is " + ageOnMercury + " years";
        } else if (planet.classList.contains('venus')) {
            ageOnVenus = ((ageOnEarth * 365) / 225).toFixed(2);
            result.textContent = "Your age on Venus is " + ageOnVenus + " years";
        } else if (planet.classList.contains('earth')) {
            result.textContent = "Your age on Earth is " + ageOnEarth + " years";
        } else if (planet.classList.contains('mars')) {
            ageOnMars = ((ageOnEarth * 365) / 687).toFixed(2);
            result.textContent = "Your age on Mars is " + ageOnMars + " years";
        } else if (planet.classList.contains('jupiter')) {
            ageOnJupiter = ((ageOnEarth * 365) / 4380).toFixed(2);
            result.textContent = "Your age on Jupiter is " + ageOnJupiter + " years";
        } else if (planet.classList.contains('saturn')) {
            ageOnSaturn = ((ageOnEarth * 365) / 10585).toFixed(2);
            result.textContent = "Your age on Saturn is " + ageOnSaturn + " year";
        } else if (planet.classList.contains('uranus')) {
            ageOnUranus = ((ageOnEarth * 365) / 30660).toFixed(2);
            result.textContent = "Your age on Uranus is " + ageOnUranus + " year";
        } else if (planet.classList.contains('neptune')) {
            ageOnNeptune = ((ageOnEarth * 365) / 60225).toFixed(2);
            result.textContent = "Your age on Neptune is " + ageOnNeptune + " year";
        } else if (planet.classList.contains('pluto')) {
            ageOnPluto = ((ageOnEarth * 365) / 90560).toFixed(2);
            result.textContent = "Your age on Pluto is " + ageOnPluto + " year";
        }
    }
});