class Node {
  constructor(groupSize, next = null) {
    this.groupSize = groupSize;
    this.next = next;
  }
}

class Queue {
  constructor(limit = 5) {
    this.front = null;
    this.back = null;
    this.limit = limit;
    this.length = 0;
    this.waitTime = 0;
  }
  isFull = () => this.length === this.limit;

  isEmpty = () => this.length === this.waitTime;

  peek = () => this.waitTime;

  // addNode = (groupSize) => {
  //   const newNode = new Node(groupSize);
  //   if (this.isEmpty()) {
  //     this.front = newNode;
  //     this.back = newNode;
  //   } else {
  //     this.back.next = newNode;
  //     this.back = newNode;
  //   }
  //   this.length++;
  //   this.waitTime += groupSize * 0.5;
  // };
  addNode = (groupSize) => {
    const newNode = new Node(groupSize);
    if (this.isEmpty()) this.front = newNode;
    else this.back.next = newNode;

    this.back = newNode;
    this.length++;
    this.waitTime += groupSize * 0.5;
  };

  enqueue = (groupSize) => {
    if (this.isFull()) {
      console.log("The line is full wait for the ride to finish");
    } else {
      let numOfPeopleInGroup = groupSize;
      while (numOfPeopleInGroup > 12) {
        this.addNode(12);
        numOfPeopleInGroup -= 12;
      }
      this.addNode(numOfPeopleInGroup);
    }
  };

  dequeue = () => {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      const removed = this.front;
      if (this.length === 1) {
        this.front = null;
        this.back = null;
      } else {
        this.front = removed.next;
      }
      this.length--;
      this.waitTime -= removed.groupSize * 0.5;
      return removed.groupSize;
    }
  };
}

const jurassicPark = new Queue(4);

console.log(`The waiting time is ${jurassicPark.peek()} minutes `);
jurassicPark.enqueue(4);
console.log(`The waiting time is ${jurassicPark.peek()} minutes `);
jurassicPark.enqueue(1);
console.log(`The waiting time is ${jurassicPark.peek()} minutes `);
jurassicPark.enqueue(13);
console.log(`The waiting time is ${jurassicPark.peek()} minutes `);
jurassicPark.enqueue(6);
console.log(`The waiting time is ${jurassicPark.peek()} minutes `);

console.log("The queue has ", jurassicPark.waitTime * 2);
