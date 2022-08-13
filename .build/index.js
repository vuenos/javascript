const s = "hello world!";
console.log(s);
const myPomiseFun = () => {
  return new Promise((resolve2, reject) => {
    resolve2("Promise Done!");
  });
};
const resolve = myPomiseFun();
console.log(resolve);
const myAsyncFun = async () => {
  return "Done!";
};
const result = myAsyncFun();
console.log(result);
//# sourceMappingURL=index.js.map
