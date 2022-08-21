const s: string = "hello world!";
console.log(s);

// git push 할 때 password 묻지 않게 하기
// git config --global credential.helper store
// 이 후 패스워드 입력하면 묻지 않음

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
      reject('Async::: Wait Error!')
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
  console.log('Async:::', new Date());
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

type myInfoType = {
  [key: string] : string,
}
let jintae:myInfoType = {
  name: 'jintae Kim',
  gender: 'male'
}
console.log(jintae.name);
console.log(jintae.gender);

// Array
const newArray = [1,2,3,4,5,6];
newArray.forEach((e) => {
  console.log(e);
});

for (let item of newArray) {
  console.log("ITEM:::", item);
}

// Create Object
const myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

let propertyName = 'make';
myCar[propertyName] = 'Ford';

propertyName = 'model';
myCar[propertyName] = 'Mustang';

function showProps(obj, objName) {
  let result = '';
  for (let i in obj) {
    // obj.hasOwnProperty()를 사용해서 객체의 프로토타입 체인에 존재하지 않는 속성을 제외
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  console.log(':::RESULT:::\n',result);
}
showProps(myCar, 'myCar');


// 
const videoArray = ['book1', 'book2', 'book3', 'book4'];
const viewArray = ['book1', 'book2', 'book3', 'book4'];

for (let e in videoArray) {
  console.log(e)
}