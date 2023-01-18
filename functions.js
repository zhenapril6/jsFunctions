const numbersSum = sumcb(1, 2, callBackFunc);
console.log(numbersSum);

function callBackFunc() {
    console.log('callBack');
}
function sumcb(a, b, callBack) {
    callBack();
    return a + b;
}

function sum1(a, b) {
    return a + b;
}

const sum2 = function(a, b) {
    return a + b;
}