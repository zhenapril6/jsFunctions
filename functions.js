const numbers = sum(6, 4, function(sum) {
    return sum + 10;
}); 

function sum(a, b, callback) {
    const newSum = callback(a + b);
    console.log(newSum);
}