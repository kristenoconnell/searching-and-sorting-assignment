const sort = require("./sort");

/**
 * Sort the array of customers by first and last name
 * @param {array} customers
 */

function compareNames(leftName, rightName) {
  if (leftName < rightName) {
      return -1;
  } 
  if (leftName > rightName) {
    return 1;
  }
  if (leftName === rightName) {
      return 0;
  }
}

function sortByName(customers) {

 let names = customers.map((customer) => customer.lastName + customer.firstName);
 
 let sorted = sort(compareNames, names);
 customers = [];
  
  const strings = sorted.forEach((name) => {
    let last = name.slice(0,1);
    let first = name.slice(1, name.length);
    
    let newObj = {"firstName": first, "lastName": last};
    
    customers.push(newObj);
  })  
  return customers;
}

module.exports = sortByName;
