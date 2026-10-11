function randomArray(length, min, max){
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return arr;
}

function printArray(arr) {
  const parts = arr.map((value, cell) => `\n [cell: ${cell},value: ${value}]`);
  const text = `{${parts.join(",")}}`;
  return text;
}

console.log(`\n ---------Original array:---------`)
const array = randomArray(10, -20, 20);
console.log(printArray(array));

// Bubble
function bubbleSort(arr, isAscending) {
    const result = [...arr];
    const n = result.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            const shouldSwap = isAscending 
                ? result[j] > result[j + 1] 
                : result[j] < result[j + 1];

            if (shouldSwap) {
                const temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }
    return result;
}

console.log(`\n ---------Bubble sort. true and false:---------`);
console.log(printArray(bubbleSort(array, true)));
console.log(printArray(bubbleSort(array, false)));

// Insertion

function insertionSort(arr, isAscending) {
    const result = [...arr];
    const n = result.length;

    for (let i = 1; i < n; i++) {
        const key = result[i];
        let j = i - 1;

        // Порівняння залежно від порядку сортування
        while (j >= 0 && (isAscending ? result[j] > key : result[j] < key)) {
            result[j + 1] = result[j];
            j--;
        }
        result[j + 1] = key;
    }
    return result;
}

console.log(`\n ---------Insertion sort. true and false:---------`);
console.log(printArray(insertionSort(array, true)));
console.log(printArray(insertionSort(array, false)));

// Selection

function selectionSort(arr, isAscending) {
    const result = [...arr];
    const n = result.length;

    for (let i = 0; i < n - 1; i++) {
        let targetIndex = i;

        for (let j = i + 1; j < n; j++) {
            const isBetterTarget = isAscending 
                ? result[j] < result[targetIndex] 
                : result[j] > result[targetIndex];

            if (isBetterTarget) {
                targetIndex = j;
            }
        }

        if (targetIndex !== i) {
            const temp = result[i];
            result[i] = result[targetIndex];
            result[targetIndex] = temp;
        }
    }
    return result;
}

console.log(`\n ---------Selection sort. true and false:---------`);
console.log(printArray(selectionSort(array, true)));
console.log(printArray(selectionSort(array, false)));
