const reverseString = function(text) {
    let reversedText = '';
    textSize = text.length;
    for (let i = -1; i >= -textSize; i--) {
        reversedText += text.at(i);
    }
    return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
