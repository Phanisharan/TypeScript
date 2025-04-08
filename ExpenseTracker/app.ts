interface Expense {
  name: string;
  amount: number;
}


let expenses: Expense[] = [];

const form = document.getElementById("expense-form") as HTMLFormElement;

const nameInput = document.getElementById("expense-name") as HTMLInputElement;

const amountInput = document.getElementById("expense-amount") as HTMLInputElement;

const totalDisplay = document.getElementById("total") as HTMLElement;

const list = document.getElementById("expense-list") as HTMLUListElement;




form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const name = nameInput.value;
  const amount = parseFloat(amountInput.value);

  if (name === "" || isNaN(amount) || amount <= 0) return;

  const expense: Expense = { name, amount };

  expenses.push(expense);

  updateUI(); 

  nameInput.value = "";
  amountInput.value = "";
});


function updateUI() {
  list.innerHTML = "";

  let total = 0;

  expenses.forEach((expense) => {
    total += expense.amount;

    const li = document.createElement("li");
    li.textContent = `${expense.name}: $${expense.amount.toFixed(2)}`;
    list.appendChild(li);
  });

  totalDisplay.textContent = total.toFixed(2);
}