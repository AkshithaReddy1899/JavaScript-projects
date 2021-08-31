document.getElementById("myForm").addEventListener("click", function(event) {
    event.preventDefault();
});

const submit = document.getElementById("submit");
const error = document.getElementById("error");
const stopButton = document.getElementById("stopButton");
let list = document.getElementById("list");
let taskArr = [];
let clear = document.getElementById("clear");

submit.addEventListener("click", addItemList);

function addItemList() {
    let taskInput = document.getElementById("task").value;

    //validation
    if (taskInput === "") {
        let interval = setInterval(function errorDisplay() {
            error.textContent =
                "You have to add something to the list, cannot pass empty value.";
            stopButton.style.display = "inline";
            stopButton.addEventListener("click", stopInterval);
        }, 200);

        let stopInterval = function() {
            clearInterval(interval);
            error.textContent = "";
            stopButton.style.display = "none";
        };
    } else {
        //List
        clear.style.display = "block";

        taskArr.unshift(taskInput);
        taskArr.forEach(function(item) {
            let li = document.createElement("li");
            li.setAttribute("type", "button");
            li.setAttribute("class", "clearButton");
            li.setAttribute("onclick", "runCommand")
            li.onclick = function runCommand() {
                alert("Are you sure you want to delete this task")
                li.remove();
            };
            list.appendChild(li);
            li.textContent = item;
            taskArr.pop();
            document.getElementById("instructions").textContent = "You can delete a task by just clicking on it"
        });
    }
}

clear.addEventListener("click", function reload() {
    history.go(0);
});