// 1
function first(n) {
  if (n < 1) return;
  first(n - 1);
  console.log(n);
}

console.log("--------task1-------");
first(5);

// 2
function second(a, b) {
  console.log(a);
  if (a === b) return;

  if (a < b) {
    second(a + 1, b);
  } else {
    second(a - 1, b);
  }
}

console.log("--------task2-------");
second(5, 1);

// 3
function third(n) {
  if (n === 1) return "YES";
  if (n % 2 !== 0 || n < 1) return "NO";
  return third(n / 2);
}

console.log("--------task3-------");
console.log(third(8));
console.log(third(3));

// 4
function fourth(n) {
  if (n === 0) return 0;
  return (n % 10) + fourth(Math.floor(n / 10));
}

console.log("--------task4-------");
console.log(fourth(179));

// 5
function fifth(n) {
  if (n === 0) return;
  console.log(n % 10);
  fifth(Math.floor(n / 10));
}

console.log("--------task5-------");
fifth(179);

// 6
function sixth(n) {
  if (n === 0) return;
  sixth(Math.floor(n / 10));
  console.log(n % 10);
}

console.log("--------task6-------");
sixth(179);