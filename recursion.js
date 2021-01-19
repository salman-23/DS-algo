const numbers = [
  [1, 2, 3, 4],
  [3, 6, [5, 6], 8, 2, [2, 4], 9],
  [4, 2, [6, 7, [2, 6, 1]]],
];

const sumOfArray = (numbers) => {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers.isArray(numbers[i])) {
      sum += sumOfArray(numbers[i]);
    } else {
      sum += numbers[i];
    }
  }
  return sum;
};

console.log(sumOfArray(numbers));
