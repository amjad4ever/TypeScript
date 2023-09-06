var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var brokenNums = numbers_1[_i];
    if (brokenNums < 2) {
        console.log("".concat(brokenNums, "st"));
    }
    else if (brokenNums > 1 && brokenNums < 3) {
        console.log("".concat(brokenNums, "nd"));
    }
    else if (brokenNums > 2 && brokenNums < 4) {
        console.log("".concat(brokenNums, "rd"));
    }
    else {
        console.log("".concat(brokenNums, "th"));
    }
}
;
