// function A() {}

// const a = new A();
// console.log(a, typeof a);
// console.log(A());

// //생성하면서 데이터 넣기
// function B(name, age) {
//   console.log(name, age);
// }

// const b = new B();
// const c = new B("abcd", 20);
// console.log(B());
// // RESULT:
// // undefined
// // undefined undefined
// // abcd 20
// // undefined undefined
// // B()의 return이 없기 때문에 undefined

// // 생성자 함수
// function A() {
//   this.name = "Abcd";
// }

// const a = new A();
// console.log(a);

// // 함수를 속성으로 넣기
// function B() {
//   this.hello = function() {
//     console.log("hello");
//   };
// }

// new B().hello();

// // new Function() -> 객체가 생성된다.

// // new Object
// const a = new Object();
// console.log(a, typeof a);

// const b = new Object(true);
// console.log(b, typeof b);

// const c = new Object({ name: "abcd" }); // literal
// console.log(c, typeof c);
// // RESULT:
// // {} object
// // [Boolean: true] object
// // { name: 'abcd' } object
