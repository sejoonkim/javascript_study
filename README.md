# JavaScript

## Basic Notion

### Expression

- 값을 만들어내는 간단한 코드를 **표현식**이라고 한다.

- 표현식은 값을 만들어내기 때문에 **함수의 파라미터**로 사용할 수 있다.

### Statement

- 하나 혹은 여러 개의 표현식이 모여 문장을 이룬다.
- 모든 표현식은 문장이 될 수 있다.
- 세미콜론
- if, for가 문장의 마지막일 경우 세미콜론을 붙이지 않는다.

### Keywords

- var : 변수 선언

### Reserved Words

- return, function

### Reserved Keywords

- break, case, catch...

### Future reserved keywords

- int, boolean, byte, char...

### Identifier

- 코드 내의 변수, 함수, 혹은 속성을 식별하는 문자열
- 대소문자 구분한다.
- 숫자로 시작할 수 없다.

### Comment

- ```javascript
  //hello
  /*hello
  hello1*/
  ```

## Variable, DataTypes

### Variable

- ```javascript
  var name = "child";
  let call = "010-1234-5678";
  ```

### Constant

- ```javascript
  //선언 즉시 값을 할당한다.
  const name = "child";
  ```

### Scope of Variables

- block scope
  - const & let
- function scope
  - var

### Var, Hoisting

- [What is Hoisting?](https://https://developer.mozilla.org/ko/docs/Glossary/Hoisting)

  - 아래 있는 선언을 끌어올리다.

  - ```javascript
    // name 선언만 올라간다
    // var name;
    console.log(name);
    var name = "Star";
    ```

  - let은 hoisting 문제가 없다.

### Datatypes

- 기본적으로 동적타이핑이다.
  - value에 따라서 datatype이 결정된다.
- 기본 타입(Primitive values)
  - Boolean
  - Null
  - Undefined
  - Number
  - String
  - Symbol(<- added in ECMAScript 6): 고유한 것
- 객체(Objects)

## IF & FOR

### Conditional Statements

- Falsy
  - falst, 0, "", null, undefined, NaN
- Truethy

  - falsy 이외의 값들

- if ~ else if ~ else
  - 더 좁은 영역을 먼저 선언한다.

### Logical Operators

- &&

  - 앞이 참 일때만, 뒤를 평가한다.

  - ```javascript
    let m = 3;
    m % 3 === 0 && console.log("3으로 나누어 떨어질때만 실행"); // 실행 됨
    m % 2 === 0 && console.log("3으로 나누어 떨어지지 않을 때 실행"); // 실행 안 됨
    ```

- ||

  - 앞이 거짓 일때만, 뒤를 평가한다.

  - ```javascript
    let m = 3;
    m % 3 === 0 || console.log("3으로 나누어 떨어질때만 실행 안 됨"); // 실행 안 됨
    m % 2 === 0 || console.log("3으로 나누어 떨어지지 않을 때 실행"); // 실행 됨
    ```

### Ternary Operator

- (Condition) ? A(True) : B(False)

- ```javascript
  let a = 7;
  console.log(a % 7 === 0 ? "7의 배수 입니다" : "7의 배수가 아닙니다");
  ```

### Switch~case

- ```javascript
  const c = 6;
  switch (c % 7) {
    case 0: {
      console.log("7의 배수입니다.");
      break;
    }
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      console.log("7의 배수가 아닙니다.");
    default:
      console.log(c);
  }
  ```

### Iteration Statements

- let i, j in same FOR statement

  - ```javascript
    for (let i = 0, j = 2; i < 5; i++, j = j * j) {
      console.log("Hello", i, j);
    }
    ```

- infinite loop

  - ```javascript
    for (;;) {
      console.log("Hello");
      if (Math.random() * 100 < 10) break;
    }
    ```

* | While                     | do~while                  |
  | ------------------------- | ------------------------- |
  | 조건이 거짓될 때까지 실행 | 조건이 거짓될 때까지 실행 |
  | 0번 실행 가능성 존재      | 무조건 1번 실행           |

- **for~of**

  - used on iteraton protocol - array, customized object

  - ```javascript
    for (const i of [1, 2, 3]) {
      console.log(i);
    }
    ```

* **for~in**

  - used on any property - object, etc

  - ```javascript
    Object.prototype.test = function() {};

    for (const i in { a: 1, b: 2, c: 3 }) {
      console.log(i);
    }
    // 1
    // 2
    // 3
    // test
    ```

## Function

- 내장 객체 중 하나이다.

- 1. **선언적 함수** 함수 선언 -> 사용하기

  - ```javascript
    function greeting1() {
      console.log("greeting1");
    }
    greeting1();
    ```

  - 선언부 위, 아래에서 함수 호출 가능하다.

- 2. **익명 함수** 변수에 함수 담기

  - ```javascript
    const greeting2 = function() {
      console.log("greeting2");
    };
    greeting2();
    ```

  - 선언부 아래에서만 함수 호출 가능하다.

- 3. **생성자 함수** 객체를 만드는 방법이다 -> 잘 안 쓰인다.

  - ```javascript
    const sum = new Function("a", "b", "c", "return a + b + c");
    console.log(sum(1, 2, 3));
    ```

- | function               | new Function()           |
  | ---------------------- | ------------------------ |
  | const a = 1;           | global.a = 1;            |
  | 해당 scope에 있는 변수 | global scope에 있는 변수 |

* **\*화살표 함수, Arrow Function**

  - 항상 익명함수이다.

    - ```javascript
      const hello1 = () => {
        console.log("hello1");
      };
      ```

  - 매개변수 1개 -> 괄호 생략 가능

    - ```javascript
      const hello2 = name => {
        console.log("hello2", name);
      };
      ```

  - return의 간소화

    - ```javascript
      // 동일한 함수이다.
      const hello4 = name => {
        return `hello4 ${name}`;
      };

      const hello5 = name => `hello5 ${name}`;
      ```

  - 함수 안에 **this**가 생성되지 않는다. -> 새로운 객체 생성 불가능.

- Usage: 생성자 함수 이용하여, 새로운 객체 만들기

  - ```javascript
    function Person(name, age) {
      console.log(this);
      this.name = name;
      this.age = age;
    }

    const p = new Person("John", 37);

    console.log(p, p.name, p.age);
    ```

  - arrow function은 this가 생성되지 않기에 불가능하다.

* Usage: 함수 안에서 함수를 만들어서 반환하기

  - ```javascript
    function Plus(base) {
      return function(num) {
        return base + num;
      };
    }

    const plus5 = Plus(5);
    console.log(plus5(10));
    ```

- Usage: 함수를 호출할 때, 인자로 함수를 사용하기(callback)

  - ```javascript
    function hello(c) {
      console.log("hello");
      c();
    }

    hello(function() {
      console.log("callback");
    });
    ```

## Object

- 객체 개념

  - 함수, 클래스 (틀)에서 객체, 개체, object, instance들을 생성한다.

- 함수 이용하여 객체 생성하기, 속성 추가하기

  - function factory() {} => new factory()

    - ```javascript
      function A() {}

      const a = new A();
      console.log(a, typeof a);
      console.log(A());

      //생성하면서 데이터 넣기
      function B(name, age) {
        console.log(name, age);
      }

      const b = new B();
      const c = new B("abcd", 20);
      console.log(B());
      // RESULT:
      // undefined
      // undefined undefined
      // abcd 20
      // undefined undefined
      // B()의 return이 없기 때문에 undefined
      ```

  - 속성 추가하기, property

    - ```javascript
      // 생성자 함수
      function A() {
        this.name = "Abcd";
      }

      const a = new A();
      console.log(a);

      // 함수를 속성으로 넣기
      function B() {
        this.hello = function() {
          console.log("hello");
        };
      }

      new B().hello();

      // new Function() -> 객체가 생성된다.
      ```

* new Object()로 객체 만들기 -> 권장되지 않는다.

  - 생성하기

    - ```javascript
      const a = new Object();
      console.log(a, typeof a);

      const b = new Object(true);
      console.log(b, typeof b);

      const c = new Object({ name: "abcd" }); // literal
      console.log(c, typeof c);
      // RESULT:
      // {} object
      // [Boolean: true] object
      // { name: 'abcd' } object
      ```

- 프로토타입 체인, 객체들을 연결하기, .prototype

  - ```javascript
    function Person(name, age) {
      this.name = name;
      this.age = age;
      //   this.hello = function() {
      //     console.log("hello", this.name, this.age);
      //   };
    }

    Person.prototype.hello = function() {
      console.log("hello", this.name, this.age);
    };

    const p = new Person("abcd", 20);

    p.hello(); // hello abcd 20
    console.log(p.toString()); //호출 가능하다! [object Object]

    console.log(Person.prototype); // Person { hello: [Function] }
    console.log(Person.prototype.toString); // [Function: toString]
    console.log(Person.prototype.constructor); // [Function: Person]

    console.log(Person.hello); // undefined
    console.log(Person.prototype.hello); // [Function]

    console.log(Object.prototype); // {}
    console.log(Object.prototype.toString); // [Function: toString]
    console.log(Object.prototype.constructor); // [Function: Object]

    console.log(p instanceof Person); // true
    console.log(p instanceof Object); // true
    ```

* 프로토타입 이용한 객체 확장

  - ```javascript
    function Person() {}

    Person.prototype.hello = function() {
      console.log("hello");
    };

    function Korean(region) {
      this.region = region;
      this.where = function() {
        console.log("where", this.region);
      };
    }

    Korean.prototype = Person.prototype;

    const k = new Korean("Seoul");

    k.hello();
    k.where();

    console.log(k instanceof Korean); // true
    console.log(k instanceof Person); // true
    console.log(k instanceof Object); // true
    ```

  - k는 Korean, Person, Object 순서로 속해있다.

- 객체 리터럴

  - 문자가 직접 객체 생성에 적용되는 방법

    - ```javascript
      const a = {};

      console.log(a, typeof a);

      const b = {
        name: "abcd"
      };

      console.log(b, typeof b);

      const c = {
        name: "abcd",
        hello1() {
          console.log("hello1", this.name);
        },
        hello2: function() {
          console.log("hello2", this.name);
        },
        hello3: () => {
          console.log("hello3", this.name);
        }
      };

      c.hello1();
      c.hello2();
      c.hello3(); // undefined
      ```

* 표준 내장 객체

  - runtime에 이미 만들어진 객체: Object 기초객체, new Function(), 등등

  - slice()의 경우

    - ```javascript
      console.log(a.slice(0, 1)); // [ 'red' ]
      console.log(Array.prototype.slice, Object.prototype.slice); // [Function: slice] undefined
      ```

## Class

- ES6에 추가되었다.

- 객체를 새롭게 만들 수 있는 방법이다.

- 선언하기

  - 선언적 방식

    - ```javascript
      // 선언적 방식
      class A {}

      console.log(new A());
      ```

  - 변수 할당 방식

    - ```javascript
      // class 표현식을 변수에 할당하기
      const B = class {};

      console.log(new B());
      ```

- Hoisting은 일어나지 않는다.

- Constructor

  - ```javascript
    class C {
      constructor(name, age) {
        console.log("constructor", name, age);
      }
    }

    console.log(new C("abcd", 20));
    ```

- get, set

  - ```javascript
    class A {
      // 내부적인 변수 선언
      _name = "no name";

      get name() {
        return this._name;
      }

      set name(value) {
        this._name = value;
      }
    }
    ```

  - readonly = setter가 없는 경우

- static 변수, 함수

  - ```javascript
    class A {
      static name = "Hello";
      static age = 20;
      static hello() {
        console.log(A.age);
      }
    }

    console.log(A, A.age); // [Function: Hello] { name: 'Hello', age: 20 } 20
    ```

### Member Variable, property of a Class

- 멤버 변수

  - ```javascript
    class A {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
    }

    console.log(new A("abcd", 20));
    ```

  - 12 버전 이상 권장, runtime 주의하기

    - ```javascript
      class B {
        name; // this.name, undefined
        age; // this.age, undefined
      }
      ```

    - ```javascript
      class C {
        name = "no name";
        age = 0;

        constructor(name, age) {
          this.name = name;
          this.age = age;
        }
      }
      new C("name", 20);
      ```

- 멤버 함수

  - 2가지 선언 방식

    - ```javascript
      class A {
        hello1() {
          console.log("function");
        }

        hello2 = () => {
          console.log("arrow");
        };
      }
      ```

### Extends

- Basic class inheritance

  - ```javascript
    class Parent {
      name = "Kim";

      hello() {
        console.log("hello", this.name);
      }
    }

    class Child extends Parent {}

    const p = new Parent();
    const c = new Child();

    console.log(p, c); // Parent { name: 'Kim' } Child { name: 'Kim' }
    ```

- Override

  - ```javascript
    class Parent {
      name = "Kim";

      hello() {
        console.log("hello", this.name);
      }
    }

    class Child extends Parent {
      age = 20;
      // age도 같이 출력된다.
      hello() {
        console.log("hello", this.name, this.age);
      }
    }
    ```

- Super

  - ```javascript
    class Parent {
      name;

      constructor(name) {
        this.name = name;
      }

      hello() {
        console.log("hello", this.name);
      }
    }

    class Child extends Parent {
      age;

      constructor(name, age) {
        super(name); // child가 parent에서 상속 받을 때 생성자에서 꼭 필요하다.
        this.age = age;
      }

      hello() {
        console.log("hello", this.name, this.age);
      }
    }
    ```

- Static Interitance

  - ```javascript
    class Parent {
      static age = 20;
    }

    class Child extends Parent {}

    console.log(Parent.age, Child.age); // 20 20
    ```
