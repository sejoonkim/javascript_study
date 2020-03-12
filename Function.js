// function hello1() {
//   console.log("hello1");
// }

// console.log(hello1, typeof hello1);

// function hello2(name) {
//   console.log("hello2", name);
// }

// function hello3(name) {
//   return `hello3 ${name}`;
// }

// console.log(hello3("Mark"));

// const hello1 = function() {
//   console.log("hello1");
// };

// console.log(hello1, typeof hello1);

// const hello2 = function(name) {
//   console.log("hello2", name);
// };

// function greeting1() {
//   console.log("greeting1");
// }
// greeting1();

// greeting2();
// const greeting2 = function() {
//   console.log("greeting2");
// };

// console.log(greeting2);

// const sum = new Function("a", "b", "c", "return a + b + c");
// console.log(sum(1, 2, 3));

// global.a = 1;
// {
//     const a = 1;
//     const test = new Function('return a');
//     console.log(test());
// }

// {
//     const a = 2;
//     const test = function() {
//         return a;
//     }
//     console.log(test());
// }

// // 항상 익명함수이다
// const hello1 = () => {
//     console.log('hello1');
// }

// // 매개변수 1개 -> 괄호 생략 가능
// const hello2 = name => {
//     console.log('hello2', name);
// }

// const hello3 = (name, age) => {
//     console.log('hello3', name, age);
// }

// const hello4 = name => {
//     return `hello4 ${name}`;
// }

// const hello5 = name => `hello5 ${name}`;

// //생성자 함수 이용하여, 새로운 객체를 만들어 내는 방법
// function Person(name, age) {
//   console.log(this);
//   this.name = name;
//   this.age = age;
// }

// const p = new Person("John", 37);

// console.log(p, p.name, p.age);

// const a = new Person("Anna", 26);

// console.log(a, a.name, a.age);

// const Cat = (name, age) => {
//   console.log(this);
//   this.name = name;
//   this.age = age;
// };

// const c = new Cat("고양이", 1);

// function Plus(base) {
//   return function(num) {
//     return base + num;
//   };
// }

// const plus5 = Plus(5);
// console.log(plus5(10));

function hello(c) {
  console.log("hello");
  c();
}

hello(function() {
  console.log("callback");
});
