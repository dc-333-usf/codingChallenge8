// Task 1: function declaration. Employee salary calculation scenario.
function calculateSalary(baseSalary, bonus, taxRate) { //declare function with parameters
    netSalary = (baseSalary + bonus) - (baseSalary * taxRate); //use formula to calculate the net salary
    return `Net Salary: $${netSalary.toFixed(2)}`; //return the net salary as an amount to 2 decimal places
}

console.log(calculateSalary(5000, 500, 0.1)); //test data
console.log(calculateSalary(7000, 1000, 0.15));

// Task 2: function expression. Product price after discount scenario.
const calculateDiscount = function(price, discountRate) { //declare function
    finalPrice = price - (price * discountRate); //use formula to find final price after discount
    return `Final Price: $${finalPrice.toFixed(2)}`; //return a string including the final price to two decimal places
}

console.log(calculateDiscount(100, 0.2)); //test data
console.log(calculateDiscount(250, 0.15));

// Task 3: arrow function. Service fee calculation scenario.
const calculateServiceFee = (amount, serviceType) => {
    if (serviceType === "Premium") {
        fee = amount * 0.15;
    } else if (serviceType === "Standard") {
        fee = amount * 0.1;
    } else {
        fee = amount = 0.05;
    };

    return `Service Fee: $${fee.toFixed(2)}`;
    }; 


console.log(calculateServiceFee(200, "Premium")); // Expected output: "Service Fee: $30.00"
console.log(calculateServiceFee(500, "Standard"));

// Task 4: parameters and arguments. Car rental cost calculation scenario.
function calculateRentalCost(days, carType, insurance = false) {
    if (carType === "Luxury") {
        cost = days * 100;
    } else if (carType === "Standard") {
        cost = days * 60;
    } else {
        cost = days * 40;
    };

    if (insurance === true) {
        cost += (20 * days);
    };

    return `Total Rental Cost: $${cost.toFixed(2)}`;
}

console.log(calculateRentalCost(3, "Economy", true)); 
console.log(calculateRentalCost(5, "Luxury", false));

//Task 5: Returning values. Loan payment calculation scenario.
function calculateLoanPayment(principal, rate, time) {
    totalPayment = principal + (principal * rate * time);
    return `Total Payment" $${totalPayment.toFixed(2)}`;
}

console.log(calculateLoanPayment(1000, 0.05, 2));
console.log(calculateLoanPayment(5000, 0.07, 3));