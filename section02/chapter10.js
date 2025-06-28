// 1. Date 객체를 생성하는 방법

let date1 = new Date();
console.log(date1);

let date2 = new Date("2001-01-26/10:10:21");
console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시00분00초"로부터
// 몇 ms가 지났는지를 의미하는 숫자값

let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1);
console.log(date1, date4);

// 3. 시간 요소 추출
let year = date1.getFullYear();
let month = date1.getMonth()+1;
let date = date1.getDate();

let hour = date1.getHours();

console.log(year,month,date);

// 4. 시간 수정

date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(22);
console.log(date1);

// 5. 시간을 여러 포맷으로 출력
console.log(
    date1.toDateString()
);

console.log(
    date1.toLocaleString()
);