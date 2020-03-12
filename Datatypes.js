// value에 따라서 datatype이 결정된다.
let whatever = "Mark";

whatever = 37;

whatever = true;

// Boolean
const isTrue = true;
const isFalse = false;

console.log(isTrue, typeof isTrue);
console.log(isFalse, typeof isFalse);

// 이렇게 사용되지 않는다.
const a = new Boolean(false);
console.log(a, typeof a);

if (a) {
  console.log("false?"); //a가 true이기 때문에 실행된다.
}

const b = Boolean(false);
console.log(b, typeof b);

if (b) {
  console.log("false?");
}

// Null
const c = null;

console.log(c, typeof c);

// Undefined
let d;

console.log(d, typeof d);

d = undefined;

console.log(d, typeof d);

if (c == d) {
  console.log(c == d);
}

if (c === d) {
  console.log(c === d);
}

// Number
const e = 37;

console.log(e, typeof e);

const f = 96.7;

console.log(f, typeof f);

const g = NaN;

console.log(g, typeof g);

const h = Number("Mark");

console.log(h, typeof h);

const i = Number("37");

console.log(i, typeof i);

// String
const j = "Mark";

console.log(j, typeof j);

const k = "Mark" + "Lee";

console.log(k, typeof k);

// template string
const l = `${a} lee`;
console.log(l, typeof l);

// Symbol
const m = Symbol();
const n = Symbol(37);
const o = Symbol("Mark");
const p = Symbol("Mark");

console.log(m, typeof m);
console.log(c === d);
