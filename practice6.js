class ArrayStack {
  constructor() {
    this.items = [];
    this.top = -1;
  }


  push(element) {
    this.top++;
    this.items[this.top] = element;
  }


  pop() {
    if (this.isEmpty()) {
      console.log("Стек порожній!");
      return null;
    }
    const poppedElement = this.items[this.top];
    this.items.length = this.top;
    this.top--;
    return poppedElement;
  }


  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.top];
  }

  clear() {
    this.items = [];
    this.top = -1;
  }

  count() {
    return this.top + 1;
  }

  size() {
    return this.count();
  }

  isEmpty() {
    return this.top === -1;
  }

  toString() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    let result = [];
    for (let i = this.top; i >= 0; i--) {
      result.push(this.items[i]);
    }
    return result.join(" -> ");
  }
}
console.log("--- Тест ArrayStack ---");
const stackArray = new ArrayStack();

stackArray.push(10);
stackArray.push(20);
stackArray.push(30);

console.log("Стек після додавання 10, 20, 30:", stackArray.toString());
console.log("Вершина стеку (peek):", stackArray.peek());
console.log("Кількість елементів (size/count):", stackArray.size());

console.log("Видалений елемент (pop):", stackArray.pop());
console.log("Стек після pop():", stackArray.toString());

stackArray.clear();
console.log("Стек після clear():", stackArray.toString());