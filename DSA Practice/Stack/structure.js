class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) return "Stack is Empty cannot perform Pop operation";

    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) return "Stack is Empty cannot perform Peek operation";

    return this.stack[this.size() - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  print() {
    for (let el of this.stack) console.log(el);
  }
}

const s1 = new Stack();

s1.push(2);
s1.push(23);
s1.push(52);
s1.push(62);
s1.print();
console.log("================");
s1.pop();
s1.pop();
s1.pop();
s1.push(90);
s1.push(120);
s1.print();
