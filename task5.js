function randomArray(length, min, max) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return arr;
}
const array = randomArray(10, -20, 20);
console.log(array)

function fifth(arr) {
  if (arr.length < 2) return [...arr];

  const result = [...arr];

  const temp = result[0];
  result[0] = result[result.length-1];
  result[result.length-1] = temp;

  return result;
}

console.log(fifth(array));