// Find Duplicate Char

function findDuplicates(str) {
  const charMap = {};
  const duplicates = [];
  for (let char of str) {
    charMap[char] = (charMap[char] || 0) + 1;
  }
  for (let char in charMap) {
    if (charMap[char] > 1) duplicates.push(char);
  }
  return duplicates;
}
console.log(findDuplicates("programming")); // ['r', 'g', 'm']