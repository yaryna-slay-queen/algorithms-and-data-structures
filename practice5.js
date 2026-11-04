function randomArray(length, min, max) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    const randomFloat = Math.random() * (max - min) + min;
    arr.push(parseFloat(randomFloat.toFixed(2)));
  }
  return arr;
}

function isSorted(arr, isAscending = true) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (isAscending) {
      if (arr[i] > arr[i + 1]) return false;
    } else {
      if (arr[i] < arr[i + 1]) return false;
    }
  }
  return true;
}

function quickSort(arr, isAscending = true) {
  if (arr.length <= 1) return arr;

  const p = arr[Math.floor(arr.length / 2)];
  const left = [];
  const centre = [];
  const right = [];

  for (const item of arr) {
    if (item === p) {
      centre.push(item);
    } else if (isAscending ? item < p : item > p) {
      left.push(item);
    } else {
      right.push(item);
    }
  }

  return [...quickSort(left, isAscending), ...centre, ...quickSort(right, isAscending)];
}


const arr = randomArray(10, -100, 100);

console.log(`початковий масив`);
console.log(isSorted(arr, false));

const sortedT = quickSort(arr, true);

console.log('True');
console.log(isSorted(sortedT, true));
console.log(sortedT);

const sortedF = quickSort(arr, false);

console.log('False');
console.log(isSorted(sortedF, false));