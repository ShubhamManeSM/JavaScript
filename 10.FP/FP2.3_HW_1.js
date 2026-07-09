const tasks = [
  { id: 1, title: "Task 1", status: "todo" },
  { id: 2, title: "Task 2", status: "inProgress" },
  { id: 3, title: "Task 3", status: "completed" },
  { id: 4, title: "Task 4", status: "todo" }
];

const taskListContainer = document.querySelector("#taskList");
const statusDropdown = document.querySelector("#statusDropdown");

function renderTasks(selectedStatus) {
  const filteredTasks = selectedStatus === "all"
    ? tasks
    : tasks.filter(task => task.status === selectedStatus);

  const taskListHTML = filteredTasks.map(task => `
    <li>
      <strong>ID:</strong> ${task.id}<br>
      <strong>Title:</strong> ${task.title}<br>
      <strong>Status:</strong> ${task.status}<br>
    </li>
    <hr>
  `);

  taskListContainer.innerHTML = taskListHTML.join('');
}

renderTasks("all");

statusDropdown.addEventListener("change", function () {
  renderTasks(statusDropdown.value);
});