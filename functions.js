const callback = function() {
    
}

const numbersSum = sum(1, 2, function(sum) {
    return sum + 5;
});

function sum(a, b, callback) {
    const newSum = callback(a + b);
    console.log(newSum);
    return a + b;
}

function sum1(a, b) {
    return a + b;
}