// 1. 상수 객체

const animal = {
    type : "고양이",
    name : "나비",
    color : "green",
}

animal.age=2;
animal.name="까망이"
delete animal.color;

console.log(animal);

// 2. 메서드
// 값이 함수인 속성을 말함

const person = {
    name : "유지훈",
    sayHi() {
        console.log("안녕");
    },
};
person.sayHi();