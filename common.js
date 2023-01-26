console.log('Hello, World!!');

// 날짜
const isDate = new Date(); // today
console.log('toUTCString :', isDate.toUTCString());
console.log('toISOString :', isDate.toISOString());
const dateArr = `
${isDate.getFullYear()} 년
${isDate.getMonth() + 1} 월
${isDate.getDate()} 일
`
console.log(dateArr); // 현재 날짜 표기

const intlDate = new Intl.DateTimeFormat('kr').format(isDate);
const intlDateFull = new Intl.DateTimeFormat('kr', {
  dateStyle: 'full',
  timeStyle: 'full',
}).format(isDate);
console.log('Intl.DateTimeFormat :', intlDate);
console.log('Intl.DateTimeFormat :', intlDateFull);

// for in, of
const videoArray = ['video1','video2','video3','video4','video5']
const bookArray = ['book1','book2','book3','book4','book5']
for (let e in videoArray) {
  console.log('Videos for in :', e)
}
for (let e of bookArray) {
  console.log('Books for of :', e)
}

// Array
const newArray = [1,2,3,4,5,6];
newArray.forEach((e) => {
  console.log(e);
});

for (let item of newArray) {
  console.log("ITEM:::", item);
}

//
const hasPaid = new Map();
hasPaid.set('123', true);
hasPaid.set('abc', false);

console.log(hasPaid.get('123'))

// 변수값 재할당
score = 80;
var score;
console.log(score);

// Logical Operators (&&)
let logIn = true
let logOut = false
if (logIn) {
  console.log('%c You are logged in : if syntax', 'color: green');
}
logIn && console.log('%c 왼쪽 조건이 true 이라면 오른쪽 코드를 실행 : Logical and && syntax', 'color: green');

// Logical OR
if (!logOut) {
  console.log('%c You are logout : if syntax', 'color: red');
}
logOut || console.log('%c 왼쪽 조건이 false 이라면 오른쪽 코드를 실행 : Logical OR || syntax', 'color: red');

// Ternary Operator
let courses = ['국어', '수학', '영어'];

(courses.length === 0)
 ? console.log('선택할 수 있는 수업이 없습니다.')
 : console.log(`현재 ${courses.length}개의 수업이 선택가능함`)

for (let i of courses) {
  console.log(i)
}