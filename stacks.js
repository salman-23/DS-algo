class Node {
  constructor(color, number, next = null) {
    this.color = color;
    this.number = number;
    this.next = next;
  }
  getData = () => `${this.color} - ${this.number}`;
}

class Stack {
  constructor(limit = 20) {
    this.top = null;
    this.length = 0;
    this.limit = limit;
  }

  isFull = () => this.length === this.limit;

  isEmpty = () => this.length === 0;

  peek = () =>
    this.isEmpty() ? "No cards left in the deck" : this.top.getData();

  push = (color, number) => {
    if (this.isFull()) {
      console.log("The deck is full!");
    } else {
      const newNode = new Node(color, number, this.top);
      this.top = newNode;
      this.length++;
    }
  };

  pop = () => {
    if (this.isEmpty()) {
      console.log("The deck is empty!");
    } else {
      const popped = this.top;
      this.top = popped.next;
      this.length--;
      return popped.getData();
    }
  };
}

const colors = ["red", "blue", "green", "yellow"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const random = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const deck = new Stack();
for (let i = 0; i < deck.limit; i++) {
  deck.push(`${random(colors)}-${random(numbers)}`);
}

const player1 = new Stack(5);
const player2 = new Stack(5);

const distribute = (player) => {
  let i = 0;
  while (i < player.limit) {
    let card = deck.pop();
    console.log(`${i + 1}- ${card}`);
    i++;
  }
};
console.log("player 1 ------------------");
distribute(player1);
console.log("player 2 ------------------");
distribute(player2);

console.log(`First card in deck: ${deck.peek()}`);
