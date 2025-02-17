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
const calculateServiceFee = (amount, serviceType) => { //declare arrow function
    if (serviceType === "Premium") { //if service type is premium, the following code will execute
        fee = amount * 0.15; //the fee is 15 percent of the amount
    } else if (serviceType === "Standard") { //if the service type is standard
        fee = amount * 0.1; //the fee will be 10 percent of the amount
    } else { //otherwise
        fee = amount = 0.05; //the fee will be 5 percent of the amount
    };

    return `Service Fee: $${fee.toFixed(2)}`; //returning the fee to two decimal places using template literals
    }; 


console.log(calculateServiceFee(200, "Premium")); //test data
console.log(calculateServiceFee(500, "Standard"));

// Task 4: parameters and arguments. Car rental cost calculation scenario.
function calculateRentalCost(days, carType, insurance = false) { //declare function
    if (carType === "Luxury") { //if type is luxury
        cost = days * 100; //cost will be 100 dollars per day
    } else if (carType === "Standard") { //if it is standard
        cost = days * 60; //it is 60 dollars a day
    } else { //otherwise
        cost = days * 40; //it's 40 dollars a day
    };

    if (insurance === true) { //if they got insurance
        cost += (20 * days); //add 20 dollars times the nnumber of days to the total cost
    };

    return `Total Rental Cost: $${cost.toFixed(2)}`; //return the cost to two decimal places using template literals
}

console.log(calculateRentalCost(3, "Economy", true)); //test data
console.log(calculateRentalCost(5, "Luxury", false));

// Task 5: Returning values. Loan payment calculation scenario.
function calculateLoanPayment(principal, rate, time) { //declare function
    totalPayment = principal + (principal * rate * time); //the formula to find the total payment, given the initial amount, interest rate, and time
    return `Total Payment" $${totalPayment.toFixed(2)}`; //cost to two decimal places, template literals
}

console.log(calculateLoanPayment(1000, 0.05, 2)); //test data
console.log(calculateLoanPayment(5000, 0.07, 3));

// Task 6: Higher-order functions. Identifying large transactions scenario.
const transactions = [200, 1500, 3200, 800, 2500, 1300, 900]; //declare array
const over1000 = transactions.filter(amnt => amnt >= 1000); //filter array and store it as a new array
console.log(over1000); //log the filtered array

// Task 7: Closures. Shopping Cart Tracker scenario.
function createCartTracker() { //create function
    let total = 0; //initialize variable "total"
    return function(amnt) { //return a new function that takes the argument "amnt" for amount
        total += amnt; //add the entered amount to the total
        return total; //return the total
    };
}

let cart = createCartTracker(); //create the function using our function
console.log(cart(20)); //test data
console.log(cart(35));