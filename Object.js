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

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   //   this.hello = function() {
//   //     console.log("hello", this.name, this.age);
//   //   };
// }

// Person.prototype.hello = function() {
//   console.log("hello", this.name, this.age);
// };

// const p = new Person("abcd", 20);

// p.hello(); // hello abcd 20
// console.log(p.toString()); //호출 가능하다! [object Object]

// console.log(Person.prototype); // Person { hello: [Function] }
// console.log(Person.prototype.toString); // [Function: toString]
// console.log(Person.prototype.constructor); // [Function: Person]

// console.log(Person.hello); // undefined
// console.log(Person.prototype.hello); // [Function]

// console.log(Object.prototype); // {}
// console.log(Object.prototype.toString); // [Function: toString]
// console.log(Object.prototype.constructor); // [Function: Object]

// console.log(p instanceof Person); // true
// console.log(p instanceof Object); // true

// prototype 상속

// function Person() {}

// Person.prototype.hello = function() {
//   console.log("hello");
// };

// function Korean(region) {
//   this.region = region;
//   this.where = function() {
//     console.log("where", this.region);
//   };
// }

// Korean.prototype = Person.prototype;

// const k = new Korean("Seoul");

// k.hello();
// k.where();

// console.log(k instanceof Korean); // true
// console.log(k instanceof Person); // true
// console.log(k instanceof Object); // true

// // 문자가 직접 객체에 적용되는 방법
// const a = {};

// console.log(a, typeof a);

// const b = {
//   name: "abcd"
// };

// console.log(b, typeof b);

// const c = {
//   name: "abcd",
//   hello1() {
//     console.log("hello1", this.name);
//   },
//   hello2: function() {
//     console.log("hello2", this.name);
//   },
//   hello3: () => {
//     console.log("hello3", this.name);
//   }
// };

// c.hello1();
// c.hello2();
// c.hello3(); // undefined

// 표준 내장 객체: Array
const a = new Array("red", "black", "white");

console.log(a, typeof a); // [ 'red', 'black', 'white' ] object
console.log(a instanceof Array); // true
console.log(a instanceof Object); // true

const b = ["red", "green", "yellow"];

console.log(b, typeof b); // [ 'red', 'green', 'yellow' ] object
console.log(b instanceof Array); // true
console.log(b instanceof Object); // true

console.log(b.slice(0, 1)); // [ 'red' ]
console.log(Array.prototype.slice, Object.prototype.slice); // [Function: slice] undefined
