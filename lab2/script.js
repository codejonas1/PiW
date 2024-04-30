let tasks = ["Zrobić zadanie na piwo", "Podlać roślinki", "Kupić żarówkę"]
let doneTasks = []
let deleteTasks = []

const toDoList = document.getElementById("toDoList");
const addItemBtn = document.getElementById("addItemBtn");
const deleteList = document.getElementById("deleteTasks");
const undoBtn = document.getElementById('undo');
let buffer = false;

function refreshTasks() {
    toDoList.innerHTML = ""
    deleteList.innerHTML = ""

    tasks.forEach((el, i) => {
        const spanItem = document.createElement("span");
        spanItem.setAttribute("class", "listItem")

        const item = document.createElement("p");
        item.setAttribute("onclick", "done("+i+")");
        item.innerHTML = el;

        const deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("onclick", "deleteTask(1,"+ i +")");
        deleteBtn.textContent = "X";
        
        spanItem.appendChild(item);
        spanItem.appendChild(deleteBtn);
        toDoList.appendChild(spanItem);
    })

    doneTasks.forEach((el, i) => {
        const spanItem = document.createElement("span");
        spanItem.setAttribute("class", "listItem")

        const item = document.createElement("p");
        item.setAttribute("class", "doneTask");
        item.setAttribute("onclick", "unDone("+i+")");
        item.innerHTML = el;

        const deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("onclick", "deleteTask(2,"+ i +")");
        deleteBtn.textContent = "X";

        spanItem.appendChild(item);
        spanItem.appendChild(deleteBtn);
        toDoList.appendChild(spanItem);
    })

    deleteTasks.forEach((el, i) => {
        const item = document.createElement("li");
        item.innerHTML = el;
        deleteList.appendChild(item);
    })
}

function done(taskId){
    const doneTask = tasks.splice(taskId, 1);
    const date = new Date();

    const now = date.getHours() + ":" + date.getMinutes() + " | " + date.getDate() + "."+ date.getMonth();

    doneTask[0] += ' <span class="date">' + now + '</span>';
    doneTasks.push(doneTask);

    refreshTasks();
}

function unDone(taskId){
    const unDoneTask = doneTasks.splice(taskId, 1);
    let text = "";

    for(let s of String(unDoneTask[0])){
        if(s == '<') break;
        text += s;
    }

    tasks.push(text);

    refreshTasks();
}

function deleteTask(listId, taskId){
    buffer = true;

    if(listId == 1){
        const userCheck = confirm("Czy na pewno chcesz usunąć taska: " + tasks[taskId])
        if(userCheck != true) return;

        const task = tasks.splice(taskId, 1);
        deleteTasks.push(task);
    }

    if(listId == 2){
        const userCheck = confirm("Czy na pewno chcesz usunąć taska: " + doneTasks[taskId])
        if(userCheck != true) return;

        const task = doneTasks.splice(taskId, 1);

        let text = "";

        for(let s of String(task[0])){
            if(s == '<') break;
            text += s;
        }

        deleteTasks.push(text);
    }

    refreshTasks();
}

undoBtn.addEventListener("click", () => {
    if(buffer == true){
        const lastTask = deleteTasks.pop();
        tasks.push(lastTask);
        refreshTasks();
        buffer = false;
    }
})

addItemBtn.addEventListener("click", () => {
    const newTask = document.getElementById("newTask").value;

    if(newTask == null || newTask == ""){
        alert("You can't add empty task!");
    }else{
        tasks.push(newTask);
        refreshTasks();
    }
})

window.addEventListener("load", () => {
    refreshTasks();
})


