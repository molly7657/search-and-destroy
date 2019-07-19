"use strict";

// Complete this algo
function binarySearch(array, target, lowerPointer, upperPointer) {
  if (!lowerPointer) {
    lowerPointer = 0;
  }
  if (!upperPointer) {
    upperPointer = array.length;
  }
  const midpoint = Math.floor((lowerPointer + upperPointer) / 2);
  if (array[midpoint] === target) {
    console.log(midpoint, "here we are");
    return true;
  }
  console.log(midpoint);
  if (midpoint === lowerPointer) {
    return false;
  }
  if (midpoint === upperPointer) {
    return false;
  }

  if (array[midpoint] < target) {
    lowerPointer = midpoint;
    return binarySearch(array, target, lowerPointer, upperPointer);
  }

  if (array[midpoint] > target) {
    upperPointer = midpoint;
    return binarySearch(array, target, lowerPointer, upperPointer);
  }
  // return binarySearch()
}

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
