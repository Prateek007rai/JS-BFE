// Check if Array is Sorted

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}
console.log(isSorted([1, 2, 3, 5, 4])); // false