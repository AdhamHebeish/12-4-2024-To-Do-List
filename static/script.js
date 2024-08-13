var tasklist = document.getElementById("tasks");
var taskgroup = document.getElementById("todo");
var donelist = document.getElementById("donetasks");
var donegroup = document.getElementById("completed");

function addtask() {
    var input = document.getElementById("input").value;
    input = input.toString();
    input = input.trim();
    var inputnan;
    if (Number.isNaN(Number(input))) {
        inputnan = true;
    } else {
        inputnan = false;
    }
    if (input == "") {
        window.alert("This field is empty and will not be added.");
    } else if (inputnan == false) {
        window.alert("The task cannot be a number and will not be added.");
    } else if (input.length < 3) {
        window.alert("The task is less than 3 characters long and will not be added.");
    } else {
        var li = document.createElement("li");
        li.className = "task";
        var checkbutton = document.createElement("button");
        checkbutton.className = "checkbutton";
        checkbutton.onclick = done;
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        var delbutton = document.createElement("button");
        delbutton.innerHTML = "&#x274C;";
        delbutton.className = "delbutton";
        delbutton.onclick = del;
        checkbutton.append(checkbox);
        li.append(checkbutton);
        li.append(document.createTextNode(input));
        li.append(delbutton);
        tasklist.append(li);
        document.getElementById("input").value = "";
    }
}

function del(click) {
    click.preventDefault();
    let clickbutton = click.target;
    var li = clickbutton.closest("li");
    li.remove();
}

function done(click) {
    click.preventDefault();
    let clickbutton = click.target;
    var li = clickbutton.closest("li");
    clickbutton.remove();
    var img = document.createElement("img");
    img.src = "images/icon.svg";
    img.className = "checkimg";
    li.prepend(img);
    li.className = "done";
    donelist.append(li);
}