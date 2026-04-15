function isSorted(arr) {
  let isAscending = true;
  let isDescending = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      isAscending = false;
    }
    if (arr[i] < arr[i + 1]) {
      isDescending = false;
    }
  }

  // If it's still either ascending or descending, it's sorted
  return isAscending || isDescending;
}

// Test Calls
console.log(isSorted([1, 2, 3, 4])); // true (Ascending)
console.log(isSorted([4, 3, 2, 1])); // true (Descending)
console.log(isSorted([1, 2, 5, 4])); // false (Mixed)