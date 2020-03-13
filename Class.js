// // 선언적 방식
// class A {}

// console.log(new A());

// // class 표현식을 변수에 할당하기
// const B = class {};

// console.log(new B());

// // Hoisting 일어나지 않는다
// new C();

// class C {}

// constructor
// class A {}

// console.log(new A());

// class B {
//   constructor() {
//     console.log("constructor");
//   }
// }

// console.log(new B());

// class C {
//   constructor(name, age) {
//     console.log("constructor", name, age);
//   }
// }

// console.log(new C("abcd", 20));
// console.log(new C());

// class A {
//   // 내부적인 변수
//   _name = "no name";

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     this._name = value;
//   }
// }

// const a = new A();
// console.log(a);
// a.name = "abcd";
// console.log(a);

// console.log(a.name);

// class B {
//     _name = 'no name';

//     get name() {
//         return this._name + '!!';
//     }
// }

// class A {
//   static name = "Hello";
//   static age = 20;
//   static hello() {
//     console.log(A.age);
//   }
// }

// console.log(A, A.age);

// A.hello();
// class B {
//   age = 20;
//   static hello() {
//     console.log(this.age);
//   }
// }

// console.log(B, B.age);
// B.hello();

// class C {
//   static name = "this classs name is not c";

//   static hello() {
//     console.log("hello");
//   }
// }

// console.log(C);

// class A {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// console.log(new A("abcd", 20));

// // runtime 주의하기
// class B {
//   name; // this.name
//   age; // this.age
// }

// console.log(new B());

// class C {
//   name = "no name";
//   age = 0;

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// console.log(new C("abcd", 20));

// class A {
//   hello1() {
//     console.log("hello1", this);
//   }

//   hello2 = () => {
//     console.log("hello2", this);
//   };
// }

// new A().hello1();
// new A().hello2();

// class B {
//   name = "abcd";
//   hello() {
//     console.log("hello", this.name);
//   }
// }

// new B().hello();

// class Parent {
//   name = "Kim";

//   hello() {
//     console.log("hello", this.name);
//   }
// }

// class Child extends Parent {}

// const p = new Parent();
// const c = new Child();

// console.log(p, c);

// c.hello();
// c.name = "Park";

// class Parent {
//   name = "Kim";

//   hello() {
//     console.log("hello", this.name);
//   }
// }

// class Child extends Parent {
//   age = 20;

//   hello() {
//     console.log("hello", this.name, this.age);
//   }
// }

// const p = new Parent();
// const c = new Child();

// console.log(p, c);
// c.hello();

// class Parent {
//   name;

//   constructor(name) {
//     this.name = name;
//   }

//   hello() {
//     console.log("hello", this.name);
//   }
// }

// class Child extends Parent {
//   age;

//   constructor(name, age) {
//     super(name);
//     this.age = age;
//   }

//   hello() {
//     console.log("hello", this.name, this.age);
//   }
// }

// const p = new Parent("abcd");
// const c = new Child("abcd", 20);
// console.log(p, c);

class Parent {
  static age = 20;
}

class Child extends Parent {}

console.log(Parent.age, Child.age);
