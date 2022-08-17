const s = "hello world!";
console.log(s);
const myPomiseFun = () => {
  return new Promise((resolve2, reject) => {
    resolve2("Promise Done!");
  });
};
const resolve = myPomiseFun().catch((e) => {
  console.error(e);
});
const myAsyncFun = async () => {
  return "Done!";
};
const result = myAsyncFun();
console.log(result);
const resultErr = myAsyncFun().catch((e) => {
  console.error(e);
});
function wait(sec) {
  return new Promise((resolve2, reject) => {
    setTimeout(() => {
      reject("Async::: Wait Error!");
    }, sec * 1e3);
  });
}
const myAsyncWait = async () => {
  console.log(new Date());
  try {
    await wait(3);
  } catch (e) {
    console.error(e);
  }
  console.log("Async:::", new Date());
};
const waitResult = myAsyncWait();
const user = {
  name: "jintaekim",
  age: 47,
  gender: "male"
};
console.log(user.name);
console.log(user.age);
let jintae = {
  name: "jintae Kim",
  gender: "male"
};
console.log(jintae.name);
console.log(jintae.gender);
const newArray = [1, 2, 3, 4, 5, 6];
newArray.forEach((e) => {
  console.log(e);
});
//# sourceMappingURL=index.js.map
