const s: string = "hello world!";
console.log(s);

// Promise
const myPomiseFun = () => {
  return new Promise((resolve, reject) => {
    resolve('Promise Done!');
    //reject('myError!')
  });
}
const resolve = myPomiseFun().catch(e => {
  console.error(e);
});


// async await 예외처리
const myAsyncFun = async () => {
  return 'Done!'
  //throw 'myAsyncError!'
}
const result = myAsyncFun();
console.log(result);

const resultErr = myAsyncFun().catch(e => {
  console.error(e);
});

// await
function wait(sec: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve('Promise Sec!!');
      reject('Wait Error!')
    }, sec * 1000)
  });
}

const myAsyncWait = async () => {
  console.log(new Date());
  try {
    await wait(3);
  } catch (e) {
    console.error(e);
  }
  //await wait(3);
  console.log(new Date());
}
const waitResult = myAsyncWait();

// interface

interface userType {
  name: string;
  age: number;
  readonly gender?: string;
}

const user: userType = {
  name: 'jintaekim',
  age: 47,
  gender: 'male',
}

console.log(user.name);
console.log(user.age);