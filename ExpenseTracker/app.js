// Array to store expenses
var expenses = [];
// Get DOM elements
var form = document.getElementById("expense-form");
// Grabs the form element
var nameInput = document.getElementById("expense-name");
// Input for expense name
var amountInput = document.getElementById("expense-amount");
// Input for expense amount
var totalDisplay = document.getElementById("total");
// Where total will be shown
var list = document.getElementById("expense-list");
// UL element to show all expenses
// Add event listener to form submission
form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent form reload
    var name = nameInput.value;
    var amount = parseFloat(amountInput.value);
    if (name === "" || isNaN(amount) || amount <= 0)
        return;
    var expense = { name: name, amount: amount }; // create expense object
    expenses.push(expense); // add to array
    updateUI(); // refresh list & total
    // Clear inputs
    nameInput.value = "";
    amountInput.value = "";
});
// Update the UI
function updateUI() {
    list.innerHTML = ""; // clear list
    var total = 0;
    expenses.forEach(function (expense) {
        total += expense.amount;
        var li = document.createElement("li");
        li.textContent = "".concat(expense.name, ": $").concat(expense.amount.toFixed(2));
        list.appendChild(li);
    });
    totalDisplay.textContent = total.toFixed(2);
}
