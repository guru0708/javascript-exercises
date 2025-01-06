const repeatString = function(stringToRepeat, count) {
    let repeatedString = ''

    if (count < 0) {
        /* It made more sense to me to throw an actual error rather than just returning error */
        // throw new Error("Error. Count should be 0 or a positive number.");
        return "ERROR"
    }

    for (let i = 0; i < count; i++) {
        repeatedString += stringToRepeat;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
