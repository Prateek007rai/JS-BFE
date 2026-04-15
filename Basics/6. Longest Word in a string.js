function getLongestWord(str) {
  const words = str.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) longest = word;
  }
  return longest;
}
console.log(getLongestWord("I love coding in JavaScript")); // "JavaScript"