const taskInput = document.getElementById("task__input");
const tasksForm = document.getElementById("tasks__form");
const tasksList = document.getElementById("tasks__list");

function addTask() {
    const placeholder = document.createElement("div");
    placeholder.innerHTML = `<div class="task">
                      <div class="task__title">
                        ${taskInput.value}
                      </div>
                      <a href="#" class="task__remove">&times;</a>
                    </div>`;
    let task = placeholder.firstChild;
    tasksList.insertAdjacentElement("beforeEnd", task);

    task.addEventListener("click",
        event => {
            event.preventDefault();
            if (event.target.classList.contains("task__remove")) {
                event.currentTarget.remove();
            }
        }, false
    );
    taskInput.value = "";
}

tasksForm.addEventListener("submit",
    event => {
        event.preventDefault();
        addTask();
    },
    false
)
