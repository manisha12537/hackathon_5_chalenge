// multiply arguments

//reduce this to 4 line of code
// function multiply(...args) {
//     return args.reduce((first, second) => first * second)
// }
// console.log(multiply(2, 3, 4, 5, 6, 7))
// console.log(multiply(4, 5))
// 4 * 5 = 20
// console.log(multiply(1, 2, 3, 5))
// 1 * 2 * 3 * 5 = 30
// console.log(multiply(2, 0, 4, 2))
// 2 + 0 * 4 * 2

//  NIFTY SOLUTIONS

// const multiply = (...args) =>
//   args.reduce((total, item) => total * (item || 1), 1)