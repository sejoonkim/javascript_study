// const p = new Promise((resolve, reject) => {
//   // pending
//   setTimeout(() => {
//     resolve(); // fulfilled
//   }, 1000);
// });

// // callback
// p.then(() => {
//   console.log("1000ms later gets fulfilled");
// });

// then을 설정하는 시점을 정확히하고, 함수의 실행고 ㅏ동시에 프로미스 객체를 만들면서 pending이 시작하도록 하기 위해 ㅡㅍ로미스 객체를 생성하면서 리턴하는 함수 (p)를 만들어 함수(p) 실행과 동시에 then을 설정합니다.

// function c(callback) {
//   setTimeout(() => {
//     callback();
//   }, 1000);
// }

// function p() {
//     return new Promise((resolve, reject) => {
//       // pending
//       setTimeout(() => {
//         resolve(); // fulfilled
//       }, 1000);
//     });
//   }

//   p()
//     .then(message => {
//       console.log("after 1000ms gets fulfilled", message);
//     })
//     .catch(error => {
//       console.log("after 1000ms gets rejected", error);
//     })
//     .finally(() => {
//       console.log("end");
//     });

// c(() => {
//   console.log("1000ms later callback is called");
// });

// c(() => {
//   c(() => {
//     c(() => {
//       console.log("1000ms later callback is called");
//     });
//   });
// });

// function p() {
//   return new Promise((resolve, reject) => {
//     // pending
//     setTimeout(() => {
//       resolve(); // fulfilled
//     }, 1000);
//   });
// }

// p()
//   .then(() => {
//     return p();
//   })
//   .then(() => p())
//   .then(p)
//   .then(() => {
//     console.log("4000ms later gets fulfilled");
//   });

// Promise.resolve(/* value */);

// // 어제 사용? 어떤 객체가 Promise 객체인지 아닌지 모를 때 사용한다.
// Promise.resolve(
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("abc");
//     }, 1000);
//   })
// ).then(data => {
//   console.log("if Promise, get resolve result, then is executed", data);
// });

// Promise.resolve("bar").then(data => {
//   console.log("no then method, gets executed", data);
// });

// Promise.reject(new Error("reason"))
//   .then(error => {})
//   .catch(error => {
//     console.log(error);
//   });

function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}

Promise.race([p(1000), p(2000), p(3000)]).then(messages => {
  console.log("The fastest gets fulfilled, then gets executed", messages);
});
