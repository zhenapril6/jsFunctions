const logger = function(data) {
    console.log(data, new Date());
}

const sum = function(a, b, logger) {
    logger({a, b});
    const result = a + b;
    logger(result);
    return result;
}

sum(6, 4, logger);