function randomArray(length, min, max) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}
const array = randomArray(10, -20, 20);
console.log(array)

function second(arr) {
    if (arr.length === 0){
    return { average: 0, countAbove: 0 };
    }
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum+=arr[i];
    }
    const average = sum / arr.length;
    let above = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > average){
            above+=1;
        }
    }
    return { average, above };
}

console.log(second(array));