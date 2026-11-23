function generateArray(size) {
    const arr = new Array(size);
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * 20001) - 10000;
    }
    return arr;
}


function method1(arr) {
    arr.sort((a, b) => b - a);
    return arr[5]; 
}

function method2(arr) {

    let top6 = arr.slice(0, 6).sort((a, b) => b - a);


    for (let i = 6; i < arr.length; i++) {

        if (arr[i] > top6[5]) {
            top6[5] = arr[i];

            for (let j = 5; j > 0; j--) {
                if (top6[j] > top6[j - 1]) {
                    let temp = top6[j];
                    top6[j] = top6[j - 1];
                    top6[j - 1] = temp;
                } else {
                    break;
                }
            }
        }
    }
    return top6[5];
}

function method3(arr) {
    let sixthMax = -Infinity;

    for (let step = 0; step < 6; step++) {
        let maxVal = -Infinity;
        let maxIndex = -1;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > maxVal) {
                maxVal = arr[i];
                maxIndex = i;
            }
        }

        arr[maxIndex] = -Infinity;
    }
    return sixthMax;
}

function measureTime(fn, arr) {
    const start = performance.now();
    fn(arr);
    const end = performance.now();
    return end - start;
}

function runTests() {
    const sizes = [10000, 100000, 1000000, 10000000, 100000000];
    const tableResults = [];

    for (const size of sizes) {
        console.log(`Створення та тестування масиву на ${size.toLocaleString()} елементів...`);
        const baseArray = generateArray(size);

        let times1 = [], times2 = [], times3 = [];

        for (let run = 0; run < 3; run++) {
            times1.push(measureTime(method1, baseArray.slice()));
            times2.push(measureTime(method2, baseArray.slice()));
            times3.push(measureTime(method3, baseArray.slice()));
        }


        const format = (times) => {
            const avg = (times[0] + times[1] + times[2]) / 3;
            const list = times.map(t => t.toFixed(1)).join(' ');
            return `${avg.toFixed(1)} (${list})`;
        };

        tableResults.push({
            "Розмір вхідних даних": size.toLocaleString(),
            "Спосіб 1 (Сортування)": format(times1),
            "Спосіб 2 (Масив 6)": format(times2),
            "Спосіб 3 (6 максимумів)": format(times3)
        });
    }

    
    console.table(tableResults);
    console.log("Шпора: в дужках три спроби запуску кожного методу, перед дужками середнє арифметичне");
}

runTests();