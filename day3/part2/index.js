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

function getElfGroups(elves) {
    let elfGroups = [[]];
    elves.forEach(elf => {
        const LATEST_ELF_GROUP = elfGroups[elfGroups.length - 1];
        if (LATEST_ELF_GROUP.length < 3) {
            LATEST_ELF_GROUP.push(elf);
        } else {
            elfGroups.push([
                elf
            ]);
        }
    });
    return elfGroups;
}
function calculatePriorityForElfGroup(elfGroup) {
    let badge = findLetterInAllStrings(...elfGroup);
    return getPriority(badge);
}

function calculateSumOfBadgesPerThreeElves(elves) {
    const ELF_GROUPS = getElfGroups(elves);
    let totalPriority = 0;
    ELF_GROUPS.forEach(elfGroup => {
        totalPriority += calculatePriorityForElfGroup(elfGroup);
    });
    return totalPriority;
}

const data = require("../data.json");
console.log(calculateSumOfBadgesPerThreeElves(data));