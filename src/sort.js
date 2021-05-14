/**
 * A sort algorithm that implements a stable sort
 * @param {function} compare The comparator function used in sorting
 * @param {array} elements The array to be sorted
 */

//why is this not stable? 
//where does it not keep the original if the originals are in the correct spot?
function sort(compare, elements) {
 //let property = elements[property];
  
  if (Array.isArray(elements)) {
     if (elements.length <= 1) {
       return elements;
     }
    else {
    const middle = Math.floor(elements.length /2);
    
    const left = elements.slice(0, middle);
    const right = elements.slice(middle, elements.length);
    
    const leftSorted = sort(compare, left);
    const rightSorted = sort(compare, right);
    return merge(compare, leftSorted, rightSorted);
  }
  }
  return elements;
}
  

function merge(compare, left, right) {
  const sorted = [];
  
  while (left.length && right.length) {
    
    const comparison = compare(left[0], right[0]);
    if (comparison <= 0 ) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return sorted.concat(left, right);
}


function compare (left, right) {
  if (left < right) {
    return -1;
  }
  if (left > right) {
    return 1;
  }
  if (left === right) {
    return 0;
  }
  
}

module.exports = sort;
