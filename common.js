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

// window 객체
// var 키워드로 전역변수를 선언하면 window 객체의 전역변수를 등록된다.
// const, let 키워드로 전역변수를 선억하면 window 객체로 등록되지 않는다.
var isWindow1 = "I am global var on Window Obj";
let isWindow2 = "I am global variable";
console.log(`window 객체 전역변수 'var' 키워드 사용 : ${window.isWindow1}`);
console.log(`전역변수 'let or const' 키워드 사용 : ${isWindow2}`);

// Javascript 실행 컨텍스트
let myName = 'global variable'; // window 전역변수
function wow(word) {
  console.log(word + ' ' + myName);
}
function say() {
  let myName = 'local variable';
  myName = 'local variable override'
  console.log(myName);
  wow('hello, ');
}
say();

// Prototype
const student = {
  name: 'Kim',
  age: 22,
};
// student 에는 hasOwnProperty 메소드가 없지만 아래 구문은 동작한다.
console.log(`student.hasOwnProperty('name') => `, student.hasOwnProperty('name')); // true
console.dir(student);

// student 객체는 __proto__ 프로퍼티로 자신의 부모 객체(프로토타입 객체)인 Object.prototype 을 카리킨다.
console.log(`student.__proto__ === Object.prototype =>`, student.__proto__ === Object.prototype);

function weapon(btn1, btn2) {
  this.q = btn1;
  this.w = btn2;
}
weapon.prototype.name = 'Stick'; // 상속받은 자식 변수에서 사용가능(원형, 유전자 조작)
let skill1 = new weapon('Punch', 'Strike'); // skill1 에 weapon 을 상속해 줌
let skill2 = new weapon('Strike', 'Punch'); // skill2 에 weapon 을 상속해 줌

console.log(`나의 스킬1`, skill1);
console.log(`나의 스킬2`, skill2);
console.log(`Weapon 이름`, skill2.name);

const animals1 = ['Monkey', 'Rabbit', 'Bear']; // animals1 과 animals2 는 동일함
const animals2 = new Array('Monkey', 'Rabbit', 'Bear');
animals1.sort(); // Array,prototype.sort, sort 함수가 내장되어 있다. (sort, length 등등)
console.log(animals1, animals2);

// Array 함수에 커스컴 함수를 추가한다.(유전자추가) => 모든 Array 에서 사용할 수 있는 함수
Array.prototype.addItem = function () {
  // undefined
}
console.log(animals2.addItem())



/**
 * scope chain, closure
 * scope 는 함수
 */
let c = 'C'; // 전연변수
function outer() {
  let a = 1;
  let b = 'B';
  console.log('outer a: ', a);

  function inner() {
    let a = 2;
    console.log('inner a: ', a); // 가까운 부모 scope 부터 a 를 찾는다
    console.log('outer b: ', b); // 가까운 부모 scope 부터 b 를 찾는다
    console.log('global c: ', c); // 가까운 부모 scope 부터 b 를 찾는다
  }
  // inner();
  return inner;
}
// outer();

const isClosure = outer(); // outer 의 scope chain 을 isClosure 에 할당
isClosure(); // closure, 생성한 시점의 scope chain 을 가지고 있다.


/**
 * class MySkill
 * @param punch
 * @param kick
 */
class MySkill {
  constructor(key1, key2) {
    this.punch = key1;
    this.kick = key2;
  }

  get skillInfo() {
    return `Punch: ${this.punch}, Kick: ${this.kick}`
  }

  introduce() {
    return `My Skill key1 is ${this.punch}`
  }
}

const Combo = new MySkill('Punch', 'Kick'); // MySkill 을 상속받았다.
console.log(`constructor 사용 => `, Combo.punch);
console.log(`스킬정보 (get 사용): `, Combo.skillInfo);
console.log(`스킬 Key1 정보 (introduce 사용): `, Combo.introduce());

// class MySkill 상속
class SkillExp extends MySkill {
  constructor(key1, key2) {
    super(key1, key2);
  }
}

const skillExp = new SkillExp( 88, 55)
console.log(`스킬 경험치: `, skillExp);

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//
//   // 접근자(getter) get: get 구문은 객체의 속성 접근 시 호출할 함수를 바인딩 한다.
//   get getPerson() {
//     return `get => Name: ${this.name}, Age: ${this.age}`;
//   }
//
//   introduce () {
//     return `introduce() => Name: ${this.name}, Age: ${this.age}`
//   }
// }
//
// const person = new Person('Jintae', 23); // class Person 을 상속 받는다.
// console.log(person); // Person {name: 'Jintae', age: 23}
// console.log(person.getPerson); // getPerson 함수를 바인딩(연결) 한다. get => Name: Jintae, Age: 23
// console.log(person.introduce()); // introduce 함수를 실행 한다.

// // Person class 상속
// class Developer extends Person {
//   constructor(name, age) {
//     super(name, age);
//   }
//
//   work() {
//     return `${this.name} is working javaScript`
//   }
// }

// const developer = new Developer('Jiwoo', 8);
// console.log(developer); // Developer {name: 'Jiwoo', ,age: 8}
// console.log(developer.getPerson); // get => Name: Jiwoo, Age: 8
// console.log(developer.work()); //


// parent
class Person {
  constructor(info) {
    this.name = info.name;
    this.grade = info.grade;
  }
  getPersonInfo () {
    return `name: ${this.name}, grade: ${this.grade}`
  }

  static personClass(name, age) {
    if (age >= 40) {
      return new Senior();
    } else if (age < 30) {
      return new Junior();
    }
  }
}

// const Developer = new person(33); // person 상속

class Senior extends Person {
  constructor(name) {
    super({name: name, grade: '당신은 시니어 입니다.'});
  }
}


// const developer = new Developer('Jiwoo', 8);
// console.log(developer); // Developer {name: 'Jiwoo', ,age: 8}
// console.log(developer.getPerson); // get => Name: Jiwoo, Age: 8
// console.log(developer.work()); //


class Junior extends Person {
  constructor(name) {
    super({name: name, grade: '당신은 주니어 입니다.'});
  }
}

const jintae = Person.personClass('Jintae', 44)
const jiwoo = Person.personClass('Jiwoo', 8)

console.log(jintae, jiwoo);

// // person class 상속
// class Developer extends Senior {
//   constructor(name, age) {
//     super(name, age)
//   }
// }

// const jiwoo = new Junior('Jiwoo','8');
// const jintae = new Senior('Jintae','40');
//
// console.log(jiwoo); // name: ‘Jiwoo’, age: 8
// console.log(jintae); // name: ‘Jiwoo’, age: 8


class Car{
  constructor(info){
    this.name = info.name;
    this.price = info.price;
  }
  getInfo(){
    return this.name+"의 가격은 "+this.price+" 입니다.";
  }
  static factory(name){
    if(name === "Avante"){
      return new Avante();
    }else if(name === "Sonata"){
      return new Sonata();
    }
  }
}
class Sonata extends Car{
  constructor(){
    super({name: "쏘나타", price: "2,386 ~ 3,367만원"});
  }
}
class Avante extends Car{
  constructor(){
    super({name: "아반테", price: "1,570 ~ 2,453만원"});
  }
}
const avante = Car.factory("Avante");
const sonata = Car.factory("Sonata");
console.log(avante, sonata);



class Calculator {
  constructor(operator) {
    if (operator === '+') {
      this.calculate = function(a, b) {
        return a + b;
      };
    } else if (operator === '-') {
      this.calculate = function(a, b) {
        return a - b;
      };
    } else {
      return null;
    }
  }
}

const addCalculator = new Calculator('+');
console.log(addCalculator.calculate(1, 2));

const subCalculrator = new Calculator('-');
console.log(subCalculrator.calculate(6, 4));
