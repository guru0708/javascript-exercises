const removeFromArray = function(arr, ...args) {
    for (let j = 0; j < args.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (args[j] === arr[i]) {
                arr.splice(i, 1);
                i--;
                continue;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
