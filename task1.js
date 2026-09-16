function randomArray(length, min, max){
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return arr;
}
const array = randomArray(10, -20, 20);
console.log(array)

function first(arr) {
  let count = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
      sum += arr[i];
    }
  }
  return { count, sum };
}


console.log(first(array));