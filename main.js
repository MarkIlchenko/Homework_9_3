// Homework 3
let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4];
let index = arr.reduce((a, b, i) => b > arr[a] ? i : a, 0);
document.write(`Max: ${arr[index]} Position: ${index}`);