function randomArray(length, min, max) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return arr;
}
const array1 = randomArray(10, -20, 20);
const array2 = randomArray(5, -20, 20);


function fourth(arr1, arr2) {
  return arr1.concat(arr2);
}

console.log("1: ",array1);
console.log("2: ",array2);
console.log("конкатенація", fourth(array1, array2));