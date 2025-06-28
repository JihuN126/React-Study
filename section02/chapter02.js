function returnFalse() {
    console.log("False함수");
    return false;
}

function returnTrue() {
    console.log("True함수");
    return true;
}

console.log(returnFalse() && returnTrue());