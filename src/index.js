module.exports = function toReadable(number) {
    const number09 = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const number10 = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const number90 = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const number100 = "hundred";
    let newNumber = number;
    let newString = "";
    
    if (newNumber === 0) {
        return number09[0];
    }

    if (newNumber >= 100) {
        newString += number09[Math.trunc(newNumber / 100)] + ' ' + number100;
        newNumber = newNumber % 100;
        if (newNumber > 0) {
            newString += ' ';
        }
    } 

     if (newNumber > 19) {
        newString += number90[Math.trunc(newNumber / 10) - 2]
        newNumber = newNumber % 10;
        if (newNumber > 0) {
            newString += ' ';
        }
    } 

    if (newNumber > 9) {
        newString += number10[newNumber - 10];
    } 

    if (newNumber <= 9 && newNumber > 0) {
        newString += number09[newNumber];
    }

    return newString;
};
