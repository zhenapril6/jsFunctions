function callbackFunc() {
    console.log('callback');
}

function sum(a, b, callback) {
    callback();
    return a + b;
}

const numbersSum = sum(4, 6, function() {
    console.log('newcallback');
});

console.log(numbersSum)






const sum2 = function(a, b) {
    return a + b;
}















const sum3 = (a, b) => {
    return a + b;
}