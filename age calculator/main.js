document.getElementById("calc").addEventListener("click", calculation);
let display = document.getElementById("display")
const currentDate = Date.now();

function calculation() {
    let birthYear = document.getElementById("year").value;
    let birthMonth = document.getElementById("month").value;
    let birthDate = document.getElementById("date").value;

    const birthFullDate = `${birthYear},${birthMonth},${birthDate}`;
    console.log(birthFullDate);
    const birthCompleteDate = new Date(birthFullDate);
    const difference = currentDate - birthCompleteDate;
    const ageDifference = new Date(difference);
    console.log(birthCompleteDate)
    if (ageDifference === " ") {
        display.textContent = `Please check your date of birth. Try again by clicking on "Reset" button.`
    } else if (birthYear === "" || birthMonth === " " || birthDate == " ") {
        display.textContent = "Please re-enter your correct date of birth."
    } else {
        display.textContent = `Your Age as per today is : ${Math.abs(ageDifference.getUTCFullYear() - 1970)} years`;
    }
}

//RESET
document.getElementById("reset").onclick = function() {
    document.getElementById("display").innerHTML = "";
    document.getElementById("form").reset();
}