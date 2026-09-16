function randomArray(length, min, max) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return arr;
}
const array1 = randomArray(10, -20, 20);
const array2 = randomArray(10, -20, 20);

function third(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log("масиви різної довжини!");
    return [];
  }
  const sum = [];
  for (let i = 0; i < arr1.length; i++){
    sum.push(arr1[i]+ arr2[i]);
  }
  return sum;
}

 console.log("1: ",array1);
 console.log("2: ",array2);
console.log("сума: ", third(array1, array2));