// 1. 배열의 구조 분해 할당
let arr = [1,2,3];

let [one,two,three,four=4] = arr;
console.log(one,two,three,four);

// 2. 객체의 구조 분해 할당
let person={
    name : "유지훈",
    age : 25,
    hobby : "배드민턴",
};

let {
    age : myAge,
    hobby,
    name,
    extra = "hello",
}=person;
// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name,age,hobby,extra}) => {
    console.log(name,age,hobby,extra);
}
func(person);