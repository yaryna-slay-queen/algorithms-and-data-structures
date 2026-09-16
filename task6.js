function randomArray(length, min, max) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return arr;
}
const array = randomArray(10, -20, 20);
console.log(array)

function sixth(arr) {
    const positive = [];
    const negative = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
        positive.push(arr[i]);
        } else if (arr[i] < 0) {
        negative.push(arr[i]);
        }
    }
    
    return {
    positive: positive,
    negative: negative
  };
}

console.log(sixth(array));