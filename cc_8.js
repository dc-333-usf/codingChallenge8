// Task 1: function declaration. Employee salary calculation scenario.
function calculateSalary(baseSalary, bonus, taxRate) { //declare function with parameters
    netSalary = (baseSalary + bonus) - (baseSalary * taxRate); //use formula to calculate the net salary
    return `Net Salary: $${netSalary.toFixed(2)}` //return the net salary as an amount to 2 decimal places
}

console.log(calculateSalary(5000, 500, 0.1)); //test data
console.log(calculateSalary(7000, 1000, 0.15));