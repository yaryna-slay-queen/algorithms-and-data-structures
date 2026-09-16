function randomArray(length, min, max) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return arr;
}
const array1 = randomArray(10, -20, 20);
const array2 = randomArray(10, -20, 20);
/* =========================================================
   Завдання 8
   Визначити середні арифметичні двох масивів. Утворити третій
   масив з елементів обидвох масивів, що знаходяться в межах
   між значеннями середніх арифметичних.
   ========================================================= */
function eight(arr1, arr2) {
    let sum1 = 0;
    for (let i = 0; i< arr1.length; i++){
        sum1+=arr1[i];
    }
    const avg1 = sum1 / arr1.length;

    let sum2 = 0;
    for (let i = 0; i< arr2.length; i++){
        sum2+=arr2[i];
    }
    const avg2 = sum2 / arr2.length;

    const lower = Math.min(avg1, avg2);
    const upper = Math.max(avg1, avg2);

    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] >= lower && arr1[i] <= upper) {
        result.push(arr1[i]);
        };
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] >= lower && arr2[i] <= upper) {
        result.push(arr2[i]);
        };
    };
    return {
        avg1: avg1,
        avg2: avg2,
        result: result
    };
};

console.log("1:", array1);
console.log("2:", array2);
console.log(eight(array1, array2));