function getCompartments(rucksack) {
    const START = 0;
    const MIDDLE = rucksack.length / 2;
    const END = rucksack.length;
    return [
        rucksack.slice(START, MIDDLE),
        rucksack.slice(MIDDLE, END)
    ];
}
function findLetterInAllStrings(...strs) {
    let letters = strs[0].split("");
    for (let letterIndex = 0; letterIndex < letters.length; letterIndex++) {
        let allStrsContainLetter = true;
        for (let strIdex = 1; strIdex < strs.length; strIdex++) {
            if (!strs[strIdex].includes(letters[letterIndex])) {
                allStrsContainLetter = false;
                break;
            }
        }
        if (!allStrsContainLetter) {
            letters.splice(letterIndex, 1);
            letterIndex--;
        }
    }
    return letters[0];
}
function getPriority(letter) {
    const LETTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    return LETTERS.indexOf(letter) + 1;
}

function calculatePriority(rucksack) {
    const COMPARTMENTS = getCompartments(rucksack);
    const LETTER_IN_BOTH = findLetterInAllStrings(...COMPARTMENTS);
    return getPriority(LETTER_IN_BOTH);
}

function calculatePrioritySum(rucksacks) {
    let totalPriority = 0;
    rucksacks.forEach(rucksack => {
        totalPriority += calculatePriority(rucksack);
    });
    return totalPriority;
}

const data = require("../data.json");
console.log(calculatePrioritySum(data));