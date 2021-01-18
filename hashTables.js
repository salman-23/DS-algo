students = [
  {
    name: "Jean-Luc Garza",
    score: 24,
  },
  {
    name: "Teddy Munoz",
    score: 79,
  },
  {
    name: "Georgia Ali",
    score: 17,
  },
  {
    name: "Vicky Calhoun",
    score: 8,
  },
  {
    name: "Awais Weaver",
    score: 65,
  },
  {
    name: "Athena Kline",
    score: 52,
  },
  {
    name: "Zacharia Whitaker",
    score: 38,
  },
  {
    name: "Clarice Davenport",
    score: 99,
  },
  {
    name: "Viktoria Flynn",
    score: 84,
  },
  {
    name: "Ianis Crossley",
    score: 20,
  },
  {
    name: "Johnnie Owens",
    score: 74,
  },
  {
    name: "Emily-Rose Erickson",
    score: 33,
  },
  {
    name: "Adeel Nieves",
    score: 100,
  },
  {
    name: "Dustin Villegas",
    score: 98,
  },
  {
    name: "Maxine Hughes",
    score: 65,
  },
  {
    name: "Bilaal Harding",
    score: 79,
  },
  {
    name: "Maddie Ventura",
    score: 71,
  },
  {
    name: "Leroy Rees",
    score: 44,
  },
  {
    name: "Wanda Frank",
    score: 73,
  },
  {
    name: "Margaux Herbert",
    score: 80,
  },
  {
    name: "Ali Rios",
    score: 70,
  },
  {
    name: "Nigel Santiago",
    score: 25,
  },
  {
    name: "Markus Greene",
    score: 78,
  },
  {
    name: "Harlan Parrish",
    score: 97,
  },
  {
    name: "Baran Davidson",
    score: 43,
  },
  {
    name: "Seth Rodriguezh",
    score: 67,
  },
  {
    name: "Diego Mayer",
    score: 100,
  },
];

class HashTable {
  constructor(classSize) {
    this.classSize = classSize;
    this.classes = { A: [], B: [], C: [], D: [], Other: [] };
  }

  hash = (classSize, collisionCount = 0) => {
    const encoded = new TextEncoder("utf-8").encode(classSize);
    const hashCode = encoded.reduce((a, b) => {
      return a + b;
    }, 0);

    return hashCode + collisionCount;
  };

  compress = (hashCode) => {
    return hashCode % this.classSize;
  };
  // ---------------------------
  insert = (classSize, score) => {
    let collisionCount = 0;
    for (let score of Object.values(students)) {
      if (score > 90) {
        console.log();
      }
    }

    // }else if (students.score>90){

    // }
  };

  // while (true) {
  //   const hashCode = this.hash(classSize, collisionCount);
  //   const index = this.compress(hashCode);

  //   let currentscore = this.array[index];
  //   if (!currentscore || currentscore[0] === classSize) {
  //     this.array[index] = [classSize, score];
  //     break;
  //   } else {
  //     collisionCount++;
  //   }
  // }
}

// lookup = (classSize) => {
//   let collisionCount = 0;
//   while (true) {
//     const hashCode = this.hash(classSize, collisionCount);
//     const index = this.compress(hashCode);
//     let currentscore = this.array[index];

//     if (!currentscore) return null;

//     if (currentscore[0] === classSize) {
//       return currentscore[1];
//     }

//     collisionCount++;
//   }
// };

// Ask the user for the maximum number of students in class
let maxSud = prompt("What is the maximum number of students in class");
// The students list with their scores and names should be read from a the list provided below.

// The program should then print out the students with their allocated classes.
