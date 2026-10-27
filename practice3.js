function randomArray(length, min, max){
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return arr;
}

function isSorted(arr, isAscending) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (isAscending) {
      if (arr[i] > arr[i + 1]) return false;
    } else {
      if (arr[i] < arr[i + 1]) return false;
    }
  }
  return true;
}

// Bubble
function bubbleSort(arr, isAscending) {
    const result = [...arr];
    const n = result.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            let swap;

            if (isAscending) {
                swap = result[j] > result[j + 1];
            } else {
                swap = result[j] < result[j + 1];
            }

            if (swap) {
                const temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }
    return result;
}

// Insertion

function insertionSort(arr, isAscending) {
    const result = [...arr];
    const n = result.length;

    for (let i = 1; i < n; i++) {
        const key = result[i];
        let j = i - 1;
      
        while (j >= 0) {
            let shift;
            if (isAscending) {
                shift = result[j] > key;
            } else {
                shift = result[j] < key;
            }
            if (shift === false) {
                break;
            }
            result[j + 1] = result[j];
            j = j - 1;
        }

        result[j + 1] = key;
    }
    return result;
}


// Selection

function selectionSort(arr, isAscending) {
    const result = [...arr];
    const n = result.length;

    for (let i = 0; i < n - 1; i++) {
        let targetIndex = i;

        for (let j = i + 1; j < n; j++) {
            let target;
            if (isAscending) {
                target = result[j] < result[targetIndex];
            } else {
                target = result[j] > result[targetIndex];
            }
            if (target === true) {
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

const array = randomArray(1000, -20, 20);

console.log(`\n ---------Bubble sort. true and false:---------`);
console.log(isSorted(bubbleSort(array, true),true));
console.log(isSorted(bubbleSort(array, false),false));

console.log(`\n ---------Insertion sort. true and false:---------`);
console.log(isSorted(insertionSort(array, true), true));
console.log(isSorted(insertionSort(array, false), false));

console.log(`\n ---------Selection sort. true and false:---------`);
console.log(isSorted(selectionSort(array, true), true));
console.log(isSorted(selectionSort(array, false), false));
