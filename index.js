// Write your solution in this file!

// Fix the Scope
// declare customerName to be bob in global scope
// returns the customerName:
var customerName = "bob"

// upperCaseCustomerName()
// modifies the customerName variable:
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// // setBestCustomer()
function setBestCustomer() {
  bestCustomer = "not bob";
}


// // //overwriteBestCustomer()
function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
}

// // // changeLeastFavoriteCustomer()
// // //unsuccessfully tries to reassign the least favorite customer
const leastFavoriteCustomer = "Jerry";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Harriet";
};

