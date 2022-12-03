const FS = require('fs');

function parseData(content) {
    let elves = [0];
    const LINES = content.replaceAll("\r", "").split("\n");
    LINES.forEach(line => {
        if (line == "") {
            elves.push(0);
        } else {
            elves[elves.length - 1] += parseInt(line);
        }
    });
    return elves;
}

function getHighestItemsSum(items, amount) {
    let totalAmount = 0;
    const SORTED_ITEMS = items.sort((a, b) => a - b).reverse();
    for (let itemIndex = 0; itemIndex < amount; itemIndex++) {
        totalAmount += SORTED_ITEMS[itemIndex]
    }
    return totalAmount;
}

const RAW_DATA = FS.readFileSync("../data.txt", 'utf8');
const PARSED_DATA = parseData(RAW_DATA);

const THREE_ELVES_WITH_MOST_CALORIES = getHighestItemsSum(PARSED_DATA, 3);
console.log(THREE_ELVES_WITH_MOST_CALORIES);