const expenses = [
  { name: "Groceries", amount: 150 },
  { name: "Utilities", amount: 80 },
  { name: "Dining Out", amount: 120 },
  { name: "Transportation", amount: 50 }
];

const expenseList = document.getElementById('expenseList');
const totalEl = document.getElementById('total');
const filterCheckbox = document.getElementById('filterCheckbox');

function renderExpenses(filter) {
  expenseList.innerHTML = '';
  let filteredExpenses = filter
    ? expenses.filter(exp => exp.amount > 100)
    : expenses;

  let total = 0;
  filteredExpenses.forEach(exp => {
    total += exp.amount;
    const li = document.createElement('li');
    li.classList.add('expense');
    li.innerHTML = `
      <span class="bold">Expense:</span> ${exp.name}<br>
      <span class="bold">Amount:</span> $${exp.amount}
      <hr>
    `;
    expenseList.appendChild(li);
  });
  totalEl.textContent = `$${total.toFixed(2)}`;
}

renderExpenses(false);

filterCheckbox.addEventListener('change', function() {
  renderExpenses(this.checked);
});