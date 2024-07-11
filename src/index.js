document.addEventListener("DOMContentLoaded", () => {
  // get a reference to all elements of interest
  const inputEl = document.querySelector("input#new-task-description");
  const createTaskFormEl = document.querySelector("form#create-task-form");
  const taskListEl = document.querySelector("ul#tasks");

  // Extract the value from the form input field,
  // and add it to the list
  createTaskFormEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputElValue = inputEl.value;

    const listItemEl = document.createElement("li");

    const spanEl = document.createElement("span");
    spanEl.textContent = inputElValue;
    spanEl.contentEditable = true;
    spanEl.title = "Click to edit!";

    listItemEl.appendChild(spanEl);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("btn", "btn-danger");

    listItemEl.appendChild(deleteButton);

    taskListEl.appendChild(listItemEl);

    inputEl.value = "";
  });

  // Functionality to remove an item from the task list
  taskListEl.addEventListener("click", (event) => {
    if (event.target.matches("button")) {
      const listItemEl = event.target.parentElement;
      listItemEl.remove();
    }
  });

  // Ability to edit tasks
  taskListEl.addEventListener("click", (event) => {
    if (event.target.matches("li")) {
      event.target.contenteditable = true;
    }
  });
});
