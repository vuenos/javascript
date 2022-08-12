/*
* 예외처리 Async, await
*/

//Promise
function myPromiseFun() {
  return new Promise((resolve, reject) => {
    resolve('Done!!');
  });
}

async function myAsyncFun() {
  return 'Done!';
}

const result = myAsyncFun();
const result2 = myPromiseFun();

console.log(result);
console.log(result2);