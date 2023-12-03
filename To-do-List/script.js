function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    // Create a new list item
    var listItem = document.createElement("li");

    // Create a span for the task text
    var taskText = document.createElement("span");
    taskText.textContent = taskInput.value;

    // Create a span for the delete button
    var deleteButton = document.createElement("span");
    deleteButton.textContent = "x";
    deleteButton.style.color = "red";
    deleteButton.style.cursor = "pointer";
    deleteButton.onclick = function () {
      taskList.removeChild(listItem);
    };

    // Append task text and delete button to the list item
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = "";
  }
}
