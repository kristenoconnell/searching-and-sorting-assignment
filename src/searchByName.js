/**
 * Use a binary search to find the customer with given name
 * @param {string} firstName
 * @param {string} lastName
 * @param {array} customers
 */
function compare(customerName, lastName) {
    if (customerName < lastName) {
     return 1;
   }
   if (customerName > lastName) {
     return -1;
   } if (customerName === lastName) {
      return 0;
       }
   }


//concat(customer.firstName + " " + customer.lastName)



function searchByName(firstName, lastName, customers) {
  
 if (Array.isArray(customers)) {
  let lowerIndex = 0;
  let upperIndex = customers.length - 1;
  while (lowerIndex <= upperIndex) { 
     const index = Math.floor((upperIndex + lowerIndex) / 2);
     const comparison = compare(customers[index].lastName, lastName, index, customers);
  
       if (comparison > 0) {
         lowerIndex = index + 1;
       } else if (comparison < 0) {
         upperIndex = index - 1;
       } else if (comparison === 0) {
         return index;
       }
   }
   return -1; 
 }
   return -1;
}



module.exports = searchByName;
