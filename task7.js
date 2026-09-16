function randomArray(length, min, max) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return arr;
}
const array = randomArray(10, -20, 20);
console.log(array)
function seventh(arr) {
    if (arr.length === 0) return [];
    const maxValue = Math.max(...arr);
    const minValue = Math.min(...arr);
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        if (value === maxValue && i !== arr.indexOf(maxValue)) {
            continue;
        }
        if (value === minValue && i !== arr.indexOf(minValue)) {
            continue;
        }
        result.push(value);
    }
    return result;
}

console.log(seventh(array));