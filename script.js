
let budget = 0;
let expenses = [];

const budgetInput = document.getElementById("budgetInput");
const setBudgetBtn = document.getElementById("setBudgetBtn");
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const addExpenseBtn = document.getElementById("addExpenseBtn");

const budgetDisplay = document.getElementById("budget");
const totalExpensesDisplay = document.getElementById("totalExpenses");
const remainingDisplay = document.getElementById("remaining");
const message = document.getElementById("message");
const expensesList = document.getElementById("expenses");

// Set the budget
setBudgetBtn.addEventListener("click", function () {
    const newBudget = Number(budgetInput.value);

    if (newBudget <= 0) {
        message.textContent = "Please enter a valid budget.";
        return;
    }

    budget = newBudget;
    budgetDisplay.textContent = budget;

    updateDashboard();
});

// Add an expense
addExpenseBtn.addEventListener("click", function () {
    const name = expenseName.value.trim();
    const amount = Number(expenseAmount.value);

    if (name === "" || amount <= 0) {
        message.textContent = "Enter a valid expense name and amount.";
        return;
    }

    if (budget === 0) {
        message.textContent = "Please set your budget first.";
        return;
    }

    expenses.push({
        name: name,
        amount: amount
    });

    expenseName.value = "";
    expenseAmount.value = "";

    updateDashboard();
});

// Update the dashboard
function updateDashboard() {
    let total = 0;

    expensesList.innerHTML = "";

    // Loop through expenses
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;

        const item = document.createElement("li");
        item.textContent = expenses[i].name + " - KES " + expenses[i].amount;

        expensesList.appendChild(item);
    }

    const remaining = budget - total;

    totalExpensesDisplay.textContent = total;
    remainingDisplay.textContent = remaining;

    // Conditional messages
    if (remaining < 0) {
        message.textContent = "Warning! You have exceeded your budget.";
    } else if (remaining <= budget * 0.2) {
        message.textContent = "Careful! You are close to your budget limit.";
    } else {
        message.textContent = "Good job! You are within your budget.";
    }
}
