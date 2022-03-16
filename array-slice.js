// slice
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// const numberSliced = numbers.slice(4, 8);
// console.log(numberSliced);
// console.log(numbers);


// splice korle index number theke porer je koyta bad dite chai
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// const numberSpliced = numbers.splice(4, 3);
// console.log(numberSpliced);
// console.log(numbers);


// 4 index theke 3 ta delete kore sekhane 3 ta replace kora
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// const numberSpliced = numbers.splice(4, 3, 70, 80, 90);
// console.log(numberSpliced);
// console.log(numbers);


// 4 index theke delete na kore sekhane 3 ta replace kora
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const numberSpliced = numbers.splice(4, 0, 70, 80, 90);
console.log(numberSpliced);
console.log(numbers);