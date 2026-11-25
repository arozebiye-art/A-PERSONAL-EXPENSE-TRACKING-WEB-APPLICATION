# SpendWise Budget App

## Project Description
SpendWise is a budgeting application that helps users manage their money by setting a budget, recording expenses, and tracking their remaining balance.

## Improvements Made
- Added a feature to set a personal budget.
- Added the ability to record expenses.
- Added automatic calculation of total expenses and remaining balance.
- Added warning messages when users approach or exceed their budget.
- Improved the layout and styling of the application.

## JavaScript Concepts Used

### 1. Conditionals
Used `if`, `else if`, and `else` statements to validate user input and display messages depending on the remaining budget.

### 2. Arrays
Used an array called `expenses` to store expense names and amounts.

### 3. Loops
Used a `for` loop to go through the expenses and calculate the total amount spent.

### 4. DOM Manipulation
Used JavaScript DOM methods such as `getElementById()`, `textContent`, `createElement()`, and `appendChild()` to update the webpage.

### 5. Event Listeners
Used `addEventListener()` to respond when users click the Set Budget and Add Expense buttons.

## Challenges and Solutions
One challenge was updating the total expenses and remaining budget whenever a new expense was added. I solved this by creating an `updateDashboard()` function that calculates the totals and refreshes the displayed information.

## Technologies Used
- HTML
- CSS
- JavaScript

## How to Run
1. Download or clone the project repository.
2. Open the project folder.
3. Open `index.html` in a web browser.