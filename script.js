document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    addTaskBtn.addEventListener("click", addTask);
    
    taskInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.innerHTML = `${taskText} <button class="delete-btn">삭제</button>`;

        li.addEventListener("click", function () {
            li.classList.toggle("completed");
        });

        li.querySelector(".delete-btn").addEventListener("click", function (e) {
            e.stopPropagation();
            li.remove();
        });

        taskList.appendChild(li);
        taskInput.value = "";
    }
});
