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

function getHighestItem(items) {
    return items.sort((a, b) => a - b).reverse()[0];
}

const RAW_DATA = FS.readFileSync("../data.txt", 'utf8');
const PARSED_DATA = parseData(RAW_DATA);

const ELF_WITH_MOST_CALORIES = getHighestItem(PARSED_DATA);
console.log(ELF_WITH_MOST_CALORIES);