for (let i = 0; i < 5; i++) {
  console.log("Hello", i);
}

for (let i = 0, j = 2; i < 5; i++, j = j * j) {
  console.log("Hello", i, j);
}

// for (;;) {
//   console.log("Hello");
//   if (Math.random() * 100 < 10) break;
// }

for (const i of [1, 2, 3]) {
  console.log(i);
}

Object.prototype.test = function() {};

for (const i in { a: 1, b: 2, c: 3 }) {
  console.log(i);
}
