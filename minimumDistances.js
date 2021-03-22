// https://www.hackerrank.com/challenges/minimum-distances/problem
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

// Complete the minimumDistances function below.
function minimumDistances(arr) {
    let min_distance = null;
    for (let index in arr){
        index = parseInt(index)
        let num = arr[index];
        let next_index = arr.slice(index+1).indexOf(num)
        if(next_index!=-1){
            next_index +=index+1;
            if(!min_distance){ // Only for first iteration to set value in min_distance
                min_distance = index+next_index;
            }
            else if(Math.abs((next_index-index))<min_distance){
                min_distance = Math.abs((next_index-index))
            }
        }
    }
    return min_distance? min_distance : -1

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let result = minimumDistances(a);

    ws.write(result + "\n");

    ws.end();
}
