var utils = {};

utils.randomFloatNum = function (minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseFloat(Math.random() * minNum + 1,10);
        case 2:
            return parseFloat(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        default:
            return 0;
    }
}


utils.randomNum = function (minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1,10);
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        default:
            return 0;
    }
}

module.exports = utils;