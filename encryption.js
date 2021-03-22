//  https://www.hackerrank.com/challenges/encryption/problem
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the encryption function below.
function encryption(line) {

    let row = Math.floor(Math.sqrt(line.length));
    let column = Math.ceil(Math.sqrt(line.length));
    row = row*column<line.length? ++row : row;
    let counter = 0;
    let matrix = new Array(row).fill("a").map(() => new Array(column).fill("a"));

    for (let i = 0; i < row; ++i) {
        for (let j = 0; j < column; ++j) {
            matrix[i][j] = line[counter];
            ++counter;
        }
    }
    let encryption = "";
    for (let i = 0; i < column; ++i) {
        for (let j = 0; j < row; ++j) {
            if (!matrix[j][i]) {
                break
            }
            encryption += matrix[j][i];
        }
        encryption+=" ";
    }
    return encryption
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = encryption(s);

    ws.write(result + "\n");

    ws.end();
}
