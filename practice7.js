class ArrayQueue {
  constructor(capacity = 13) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.head = 0;
    this.tail = 0;
  }

  isEmpty() {
    return this.head === this.tail;
  }

  size() {
    return this.tail - this.head;
  }

  enqueue(element) {
    if (this.tail >= this.capacity) {
      console.log("Помилка: черга переповнена (досягнуто кінця масиву)!");
      return;
    }
    this.items[this.tail] = element;
    this.tail++;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Черга порожня, нічого видаляти.");
      return null;
    }
    const removedElement = this.items[this.head];
    this.items[this.head] = undefined;
    this.head++;
    return removedElement;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Черга порожня.");
      return;
    }
    const currentElements = [];
    for (let i = this.head; i < this.tail; i++) {
      currentElements.push(this.items[i]);
    }
    console.log("Елементи черги (Head -> Tail):", currentElements.join(" -> "));
  }
}

const arrayQueue = new ArrayQueue(13);

arrayQueue.enqueue(6);
arrayQueue.enqueue(4);
arrayQueue.enqueue(6);
arrayQueue.enqueue(2);
arrayQueue.enqueue(7);

arrayQueue.print();
console.log("Кількість елементів:", arrayQueue.size());

console.log("Видалено елемент:", arrayQueue.dequeue());
arrayQueue.print();
console.log("Кількість елементів після видалення:", arrayQueue.size()); // 4