if (true) {
  console.log("Always work");
}

if (false) console.log("does not run");
if (0) console.log("does not run");
if ("") console.log("does not run");
if (null) console.log("does not run");
if (undefined) console.log("does not run");
if (NaN) console.log("does not run");

if ({}) console.log({});
if ([]) console.log([]);

const n = 15;
if (n > 0) {
  console.log("n이 0보다 큰 경우");
} else {
  console.log("n이 0보다 작은 경우");
}

if (n % 3 === 0) {
  console.log("n은 3의 배수입니다.");
} else if (n % 5 === 0) {
  console.log("n은 5의 배수입니다");
}

if ((n % 3 === 0) & (n % 5 === 0)) {
  console.log("n은 15의 배수입니다.");
}

const multipleOfThree = n % 3 === 0;
const multipleOfFive = n % 5 === 0;

if (true && true) {
  console.log();
}

let m = 3;
m % 3 === 0 || console.log("3으로 나누어 떨어질때만 실행 안 됨"); // 실행 안 됨
m % 2 === 0 || console.log("3으로 나누어 떨어질때만 실행"); // 실행 됨

let a = 7;
console.log(a % 7 === 0 ? "7의 배수 입니다" : "7의 배수가 아닙니다");

let b = 7;

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
