// JavaScript code to handle button clicks
document.getElementById("addTask").addEventListener("click", function() {
    // Get the values from the input boxes
    const taskName = document.getElementById("taskName").value;
    const taskDescription = document.getElementById("taskDescription").value;

    // Create a new task element and add it to the list of tasks
    const taskList = document.getElementById("taskList");
    const newTask = document.createElement("li");
    newTask.innerHTML = `<strong>${taskName}</strong>: ${taskDescription}`;
    taskList.appendChild(newTask);

    // Clear the input fields
    document.getElementById("taskName").value = "";
    document.getElementById("taskDescription").value = "";
});

document.getElementById("goBack").addEventListener("click", function() {
    // Implement your go back functionality here
    alert("Go Back clicked!");
});