function funcA() {
    console.log("funcA");
}

let varA = funcA;
console.log(varA);
varA();

let varB = function() { // 익명 함수
    console.log("funcB");
};

varB();

// 화살표 함수
let varC = (value) => {
    return(value+1)
};

console.log(varC(9));