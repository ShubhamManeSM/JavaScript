const tasks = [
  {id: 1, task: "Task 1", status: "todo"},
  {id: 2, task: "Task 2", status: "completed"},
  {id: 3, task: "Task 3", status: "inProgress"},
  {id: 4, task: "Task 4", status: "todo"},
  {id: 5, task: "Task 5", status: "completed"}
]

const taskListContainer = document.querySelector("#taskList")
const filterRadioButton = document.getElementsByName("task")

function renderTasks(selectedTask){

  const filteredTask = selectedTask === 'all' ? tasks : tasks.filter(task => task.status === selectedTask)

  const taskListHTML = filteredTask.map(tasks => `
  <li>
  <strong>ID:</strong> ${tasks.id}<br>
  <strong>Task:</strong> ${tasks.task}<br>
  <strong>Status:</strong> ${tasks.status}<br>
  <hr>
  </li>
  `)

  taskListContainer.innerHTML = taskListHTML.join('')
}

renderTasks('all')

  filterRadioButton.forEach(radioBtn => {
    radioBtn.addEventListener('change',function(){
      renderTasks(this.value)
    })
  })

