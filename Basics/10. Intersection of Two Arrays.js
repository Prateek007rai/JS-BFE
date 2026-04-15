// Intersection of Two Arrays

function intersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const resultSet = new Set();
  for (let num of arr2) {
    if (set1.has(num)) resultSet.add(num);
  }
  return Array.from(resultSet);
}
console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]