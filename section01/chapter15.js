// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 속성 (Key : Value)
let person = {
    name : "유지훈",
    age : 25,
    hobby : "배드민턴",
};

// 3. 객체 속성을 다루는 방법
// 3-1. 특정 속성에 접근 (점 표기법, 괄호 표기법)
let name = person.name;

let age = person["age"];

// 3-2. 새로운 속성 추가
person.job = "FE Developer";
person["FavoriteFood"] = "피자";

console.log(person);

delete person.job;
delete person["FavoriteFood"];

// 속성 유무 확인
let result1 = "name" in person;
console.log(result1);