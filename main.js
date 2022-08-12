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

console.log(result);