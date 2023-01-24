function sum(a, b) {
    console.log(a, b)
    return a + b;
}

const sum2 = function(a, b) {
    return a + b;
}

const sum3 = (a, b) => {
    return a + b;
}

const numbersSum = sum3(4, 6);

console.log(numbersSum)