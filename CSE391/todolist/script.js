const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("task-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", () => {
            tasks[index].completed = checkbox.checked;
            saveTasks();
            renderTasks();
        });

        const span = document.createElement("span");
        span.textContent = task.text;

        if (task.completed) {
            span.classList.add("completed");
        }

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(delBtn);
        list.appendChild(li);
    });
}

function addTask() {
    const taskText = input.value.trim();
    if (taskText === "") return;

    tasks.push({
        text: taskText,
        completed: false
    });

    saveTasks();
    renderTasks();
    input.value = "";
    input.focus();
}

addBtn.addEventListener("click", addTask);
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

renderTasks();