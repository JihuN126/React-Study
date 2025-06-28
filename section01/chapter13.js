// 콜백 함수
// 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미

function main(value){
    value();
}

function sub(){
    console.log("i am sub");
}

main(sub);

// 콜백 함수 활용

function repeat(count, callback) {
    for (let idx = 1; idx<count; idx++){
        callback(idx);
    }
}


// function repeatDouble(count) {
//     for (let idx = 1; idx<count; idx++){
//         console.log(idx*2);
//     }
// }

repeat(5, function(idx) {
    console.log(idx);
});
repeat(5, function(idx) {
    console.log(idx*2);
});
// repeatDouble(5);