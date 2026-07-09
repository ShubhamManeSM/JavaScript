const employees = [
  { id: 1, name: "Alice", experience: 2 },
  { id: 2, name: "Bob", experience: 9 },
  { id: 3, name: "Charlie", experience: 4 },
  { id: 4, name: "John", experience: 19 }
];

const employeeListContainer = document.querySelector("#employeeList");
const experienceCheckbox = document.querySelector("#experienceCheckbox");

function renderEmployees(filterByExperience) {
  const filteredEmployees = filterByExperience
    ? employees.filter(emp => emp.experience > 5)
    : employees;

  const employeeHTML = filteredEmployees.map(emp => `
    <li>
      <strong>ID:</strong> ${emp.id}<br>
      <strong>Name:</strong> ${emp.name}<br>
      <strong>Experience:</strong> ${emp.experience} years
    </li>
    <hr>
  `);

  employeeListContainer.innerHTML = employeeHTML.join('');
}

renderEmployees(false); 

experienceCheckbox.addEventListener("change", function () {
  renderEmployees(experienceCheckbox.checked);
});