//스코프
// 전역스코프(전체 영역) / 지역스코프(특정 영역)

let a = 1; // 전역스코프
function funcA() {
    let b=2;
    console.log(a);
}

funcA();
