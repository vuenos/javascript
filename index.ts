const s: string = "hello world!";
console.log(s);

// Promise
const myPomiseFun = () => {
  return new Promise((resolve, reject) => {
    resolve('Promise Done!');
    //reject('myError!')
  });
}
const resolve = myPomiseFun();
console.log(resolve);

// async await 예외처리
const myAsyncFun = async () => {
  return 'Done!'
  //throw 'myAsyncError!'
}
const result = myAsyncFun();
console.log(result);