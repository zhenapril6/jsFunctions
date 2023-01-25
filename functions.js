function sum(a, b) {
    console.log(a + b);
}

const sum2 = function(callback) {
    callback(6, 4);
}

sum2(sum);
