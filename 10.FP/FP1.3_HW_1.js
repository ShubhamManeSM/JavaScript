const employee = [
  {id: 1, name: "Alice", position: "Developer"},
  {id: 2, name: "Bob", position: "Designer"},
  {id: 3, name: "Charlie", position: "Manager"},
  {id: 4, name: "David", position: "Tester"}
]


const employeeListingDiv = document.querySelector("#employeeList")

const employeeListHTML = employee.map(emp => `
<div>
<strong>ID:</strong> ${emp.id}<br>
<strong>Name:</strong> ${emp.name}<br>
<strong>Position:</strong> ${emp.position}<br>
<hr>
</div>
`
)

employeeListingDiv.innerHTML = employeeListHTML.join('')